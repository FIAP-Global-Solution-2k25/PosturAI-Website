const arquivo_directory = '/src/assets/PosturAI/PosturAI.rar';

export default function DownloadEXE() {
    return (
        <div className="flex gap-5">
            <a href={arquivo_directory} download="PosturAI.rar" rel="noonpener noreferrer" className="px-7 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg 
                       border border-white/20 rounded-xl transition-all duration-300">
                Baixe agora!
            </a>
        </div>
    );
}