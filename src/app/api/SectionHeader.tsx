export default function SectionHeader({ number, title }: { number: string; title: string }) {
    return (
        <div className="flex items-center w-full max-w-4xl mx-auto mb-12 px-4">
            <span className="text-sm text-cyan-400 font-mono mr-4">{number}.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white whitespace-nowrap">{title}</h2>
            <div className="flex-grow h-px bg-gray-600 ml-4" />
        </div>
    );
}
