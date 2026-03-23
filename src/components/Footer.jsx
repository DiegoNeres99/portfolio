import { profile } from "../data/portfolioData";
import { isValidSocialProfile } from "../utils/socialLinks";

function Footer() {
  const hasGithub = isValidSocialProfile(profile.github, "github");
  const hasLinkedin = isValidSocialProfile(profile.linkedin, "linkedin");
  const hasInstagram = isValidSocialProfile(profile.instagram, "instagram");

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-shell space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.12em] text-textMuted">
          Diego Neres Miotta - Full Stack Developer
        </p>        
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-textMuted">
          {hasInstagram ? (
            <a href={profile.instagram} target="_blank" rel="me noreferrer" className="hover:text-accent">
              Instagram {profile.instagramHandle}
            </a>
          ) : null}
          {hasLinkedin ? (
            <a href={profile.linkedin} target="_blank" rel="me noreferrer" className="hover:text-accent">
              LinkedIn Diego Neres Miotta
            </a>
          ) : null}
          {hasGithub ? (
            <a href={profile.github} target="_blank" rel="me noreferrer" className="hover:text-accent">
              GitHub DiegoNeres99
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
