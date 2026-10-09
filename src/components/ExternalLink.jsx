import { FaExternalLinkAlt } from "react-icons/fa";

function ExternalLink({ href, children }) {
    return (
        <a
            href={href}
            className="text-lg font-body font-bold link-underline text-blue-400"
            target="_blank"
            rel="noreferrer"
        >
            {children}
            <FaExternalLinkAlt className="inline ml-2 text-xs" />
        </a>
    );
}

export default ExternalLink;
