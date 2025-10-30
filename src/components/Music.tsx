import { motion } from "motion/react";

// Reads a Spotify artist link from env, with a sensible fallback.
// Example artist link: https://open.spotify.com/artist/74vcDvkBngSQyEXeNRXYpB
const SPOTIFY_ARTIST_URL =
  (import.meta as any).env?.VITE_SPOTIFY_ARTIST_URL ||
  "https://open.spotify.com/artist/74vcDvkBngSQyEXeNRXYpB";

function toArtistEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (!u.hostname.includes("open.spotify.com")) return null;
    const parts = u.pathname.split("/").filter(Boolean);
    // Expect ["artist", "{id}"]
    if (parts[0] !== "artist" || !parts[1]) return null;
    const id = parts[1];
    return `https://open.spotify.com/embed/artist/${id}`;
  } catch {
    return null;
  }
}

export function Music() {
  const embedSrc = toArtistEmbedUrl(SPOTIFY_ARTIST_URL);

  return (
    <section id="music" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Music</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my artist profile and tracks on Spotify.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 p-4"
        >
          {embedSrc ? (
            <div className="relative">
              <iframe
                title="Spotify Artist"
                style={{ borderRadius: 12 }}
                src={embedSrc}
                width="100%"
                height="420"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />

              <div className="flex justify-center mt-4">
                <a
                  href={SPOTIFY_ARTIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/20 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors text-gray-200"
                >
                  Open on Spotify
                </a>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-300">
              <p className="mb-2">Invalid Spotify artist URL.</p>
              <p className="text-gray-400 text-sm">
                Set a valid link via VITE_SPOTIFY_ARTIST_URL in your env.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

