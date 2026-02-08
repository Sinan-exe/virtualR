import { platformLinks, communityLinks, resourcesLinks } from "../constants";

function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-3">
        <div>
          <h3 className="text-md mb-4 font-semibold">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {resource.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-4 font-semibold">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((platform, index) => (
              <li key={index}>
                <a
                  href={platform.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {platform.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-4 font-semibold">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((community, index) => (
              <li key={index}>
                <a
                  href={community.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {community.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
