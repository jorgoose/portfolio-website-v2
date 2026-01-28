export const prerender = false;

import type { APIRoute } from "astro";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_NOW_PLAYING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing";
const SPOTIFY_RECENTLY_PLAYED_URL =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

async function getAccessToken() {
  const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + btoa(`${clientId}:${clientSecret}`),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const data = await response.json();
  return data.access_token;
}

export const GET: APIRoute = async () => {
  try {
    const accessToken = await getAccessToken();

    // Try currently playing first
    const nowPlayingRes = await fetch(SPOTIFY_NOW_PLAYING_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (nowPlayingRes.status === 200) {
      const data = await nowPlayingRes.json();
      if (data.item) {
        return new Response(
          JSON.stringify({
            isPlaying: data.is_playing,
            title: data.item.name,
            artist: data.item.artists
              .map((a: { name: string }) => a.name)
              .join(", "),
            album: data.item.album.name,
            albumArt: data.item.album.images[0]?.url,
            songUrl: data.item.external_urls.spotify,
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "s-maxage=30, stale-while-revalidate=60",
            },
          }
        );
      }
    }

    // Fallback to recently played
    const recentRes = await fetch(SPOTIFY_RECENTLY_PLAYED_URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (recentRes.status === 200) {
      const data = await recentRes.json();
      const track = data.items?.[0]?.track;
      if (track) {
        return new Response(
          JSON.stringify({
            isPlaying: false,
            title: track.name,
            artist: track.artists
              .map((a: { name: string }) => a.name)
              .join(", "),
            album: track.album.name,
            albumArt: track.album.images[0]?.url,
            songUrl: track.external_urls.spotify,
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "s-maxage=30, stale-while-revalidate=60",
            },
          }
        );
      }
    }

    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
};
