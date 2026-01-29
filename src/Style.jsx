const StyleShowcase = () => {
    return (
        <div>
            {[
                { weight: 'extralight', label: 'Extralight' },
                { weight: 'light', label: 'Light' },
                { weight: 'normal', label: 'Regular' },
                { weight: 'medium', label: 'Medium' },
                { weight: 'semibold', label: 'Semibold' },
                { weight: 'bold', label: 'Bold' },
                { weight: 'extrabold', label: 'Extrabold' }
            ].map(({ weight, label }) => (
                <div key={weight}>
                    <h1 className={`font-panchang font-${weight} text-3xl`}>{label} Panchang</h1>
                    <p className="font-body text-base mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            ))}

            <div className="mt-4">
                {[
                    { label: 'Steel Blue', colors: ['#3A506B', '#5A7D9A', '#78A1BB'], ring: 'blue-700' },
                    { label: 'Neon Blue', colors: ['#2E86C1', '#3498DB', '#5DADE2'], ring: 'blue-500' },
                    { label: 'Ice Purple', colors: ['#6C5CE7', '#A29BFE', '#D6CCFF'], ring: 'purple-500' }
                ].map(({ label, colors, ring }) => (
                    <button
                        key={label}
                        className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group
                        bg-gradient-to-br from-[${colors[0]}] via-[${colors[1]}] to-[${colors[2]}]
                        group-hover:from-[${colors[0]}] group-hover:via-[${colors[1]}] group-hover:to-[${colors[2]}]
                        hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-${ring} btn-white-text`}
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md
                            group-hover:bg-transparent group-hover:dark:bg-transparent text-white">
                            {label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StyleShowcase;
