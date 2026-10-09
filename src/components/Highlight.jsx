function Highlight({ as: Tag = "span", children }) {
    return (
        <Tag className="bg-gradient-to-r from-[#6C5CE7] to-[#60A5FA] bg-clip-text text-transparent font-semibold">
            {children}
        </Tag>
    );
}

export default Highlight;
