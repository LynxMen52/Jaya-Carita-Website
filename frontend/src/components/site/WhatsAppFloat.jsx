import { waLink } from "@/lib/data";

export default function WhatsAppFloat() {
    return (
        <a
            data-testid="whatsapp-float"
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="group fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_20px_40px_-10px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" aria-hidden />
            <span className="absolute inset-0 rounded-full bg-[#25D366]" aria-hidden />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="26"
                height="26"
                fill="currentColor"
                className="relative z-10"
                aria-hidden
            >
                <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977.873 2.78 1.025 2.035 2.21 3.834 4.146 5.082 1.064.688 2.477 1.435 3.642 1.65.515.085 1.045.13 1.575.13.93 0 1.836-.234 2.464-1.05.327-.42.4-.954.4-1.475 0-.27-.107-.485-.41-.658-.39-.225-1.49-.74-1.85-.86z" />
                <path d="M16.05 0C7.193 0 .04 7.142.026 15.991c-.005 2.825.733 5.585 2.142 8.014L0 32l8.225-2.16a16 16 0 0 0 7.819 1.99h.006c8.853 0 16.006-7.142 16.02-15.991C32.07 7.165 24.945.024 16.05 0zm0 29.27h-.005a13.272 13.272 0 0 1-6.766-1.85l-.486-.288-5.025 1.32 1.342-4.9-.317-.5a13.215 13.215 0 0 1-2.025-7.06C2.78 8.674 8.71 2.738 16.05 2.738c3.557 0 6.9 1.388 9.413 3.905a13.21 13.21 0 0 1 3.892 9.395c-.005 7.305-5.934 13.232-13.305 13.232z" />
            </svg>
        </a>
    );
}
