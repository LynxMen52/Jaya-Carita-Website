// Brand & site data for Jaya Carita Bali Property

export const LOGO_URL = "https://customer-assets.emergentagent.com/job_bali-property-visa/artifacts/9wbnprm5_JC%20Logo.jpeg";

export const WHATSAPP_NUMBER = "6282341854239";
export const WHATSAPP_DISPLAY = "+62 823-4185-4239";
export const PHONE_DISPLAY = "+62 361 3616151";
export const EMAIL = "info@jcbaliproperty.com";
export const ADDRESS = "Jalan Betaka No 3a Dalung, Kec. Kuta Utara, Kabupaten Badung, Bali 80361";

export const waLink = (message = "Hello Jaya Carita Bali, I'd like to inquire about a property.") =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const HOT_AREAS = [
    "Uluwatu",
    "Canggu",
    "Seminyak",
    "Ubud",
    "Pererenan",
    "Berawa",
    "Jimbaran",
    "Nusa Dua",
    "Sanur",
    "Pecatu",
    "Kerobokan",
    "Tabanan",
    "Tanah Lot",
    "Ungasan",
    "Cemagi",
];

export const MAIN_SITE_URL = "https://jcbaliproperty.com/";
export const ALL_LISTINGS_URL = "https://jcbaliproperty.com/villa/";

export const LISTINGS = [
    {
        id: "saba",
        title: "Exquisite 3BR Seaside Sanctuary",
        location: "Saba Beach, Bali",
        url: "https://jcbaliproperty.com/property/exquisite-3br-seaside-sanctuary-in-saba-beach-bali/",
        image: "https://images.unsplash.com/photo-1664918706173-6349ca225dd0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdWx1d2F0dSUyMG9jZWFufGVufDB8fHx8MTc4MTQ5MzAxMnww&ixlib=rb-4.1.0&q=85",
        specs: ["2,335 m²", "3 Beds", "3 Baths"],
        status: "Villa For Sale",
        feature: "Featured",
        span: "lg:col-span-2 lg:row-span-2",
    },
    {
        id: "cemagi",
        title: "Rice Field Sanctuary — Modern 2BR Villa",
        location: "Cemagi, Bali",
        url: "https://jcbaliproperty.com/property/rice-field-sanctuary-modern-2br-villa-in-cemagi/",
        image: "https://images.unsplash.com/photo-1569881347427-c861051db3f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxiYWxpJTIwcmljZSUyMGZpZWxkJTIwdmlsbGF8ZW58MHx8fHwxNzgxNDkzMDEyfDA&ixlib=rb-4.1.0&q=85",
        specs: ["140 m²", "2 Beds", "3 Baths"],
        status: "Villa For Lease",
    },
    {
        id: "ungasan",
        title: "Hilltop Haven — 2BR Villa",
        location: "Ungasan, Bali",
        url: "https://jcbaliproperty.com/property/2br-hilltop-haven-in-ungasan/",
        image: "https://images.unsplash.com/photo-1651108066220-f61c22fc281f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBiYWxpJTIwdmlsbGElMjBwb29sfGVufDB8fHx8MTc4MTQ5MzAxMnww&ixlib=rb-4.1.0&q=85",
        specs: ["130 m²", "2 Beds", "2 Baths"],
        status: "Villa For Lease",
    },
    {
        id: "ubud",
        title: "Riverside Land in Petulu",
        location: "Ubud, Bali",
        url: "https://jcbaliproperty.com/property/riverside-land-for-lease-in-petulu-ubud/",
        image: "https://images.unsplash.com/photo-1654703943019-e519711ea124?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxiYWxpJTIwcmljZSUyMGZpZWxkJTIwdmlsbGF8ZW58MHx8fHwxNzgxNDkzMDEyfDA&ixlib=rb-4.1.0&q=85",
        specs: ["900 m²"],
        status: "Land For Lease",
    },
    {
        id: "kerambitan",
        title: "Strategic Land — Investment Plot",
        location: "Kerambitan, Tabanan",
        url: "https://jcbaliproperty.com/property/strategic-land-for-sale-in-kerambitan-great-investment-opportunity/",
        image: "https://images.unsplash.com/photo-1721222204632-bf9abe6f023f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBiYWxpJTIwdmlsbGElMjBwb29sfGVufDB8fHx8MTc4MTQ5MzAxMnww&ixlib=rb-4.1.0&q=85",
        specs: ["6,500 m²"],
        status: "Land For Sale",
    },
];

export const SERVICES = [
    {
        id: "sales",
        title: "Property Sales",
        icon: "Home",
        copy: "Curated villas, beachfront estates, and high-yield land — sourced through trusted owners across Bali.",
        href: "whatsapp",
    },
    {
        id: "rentals",
        title: "Property Rentals",
        icon: "KeyRound",
        copy: "Long-stay leaseholds and seasonal rentals with transparent terms and full due diligence.",
        href: "whatsapp",
    },
    {
        id: "legal",
        title: "Legal Services",
        icon: "Scale",
        copy: "Notary partnerships, due diligence, contracts, and foreign-ownership compliance — handled end to end.",
        href: "/services/legal",
    },
    {
        id: "visa",
        title: "Visa Services",
        icon: "Stamp",
        copy: "KITAS, investor, retirement, and business visas. Stay legally — focus on building your life in Bali.",
        href: "/services/visa",
    },
    {
        id: "management",
        title: "Property Management",
        icon: "Building2",
        copy: "Bookings, maintenance, staffing, and revenue optimization for owners who live abroad.",
        href: "whatsapp",
    },
    {
        id: "contractor",
        title: "Contractor Consultant",
        icon: "HardHat",
        copy: "From architect briefing to handover — we vet contractors, review BOQs, supervise builds, and protect your timeline and budget.",
        href: "whatsapp",
    },
];

export const SERVICE_DETAILS = {
    legal: {
        title: "Legal Services",
        eyebrow: "Compliance & contracts",
        intro:
            "Every villa, every land plot, every signature — protected. Our partnered notaries and Bali-based legal team handle the full paperwork stack, in English, on your timeline.",
        items: [
            {
                title: "PT PMA Establishment",
                description:
                    "Set up your foreign-owned Indonesian company — the legal vehicle for villa investments, businesses, and long-term ownership.",
                icon: "Building2",
            },
            {
                title: "Legal Assistance & Notary",
                description:
                    "Sale & purchase agreements (PPJB/AJB), title verification, sworn translations, and full notary coordination on every transaction.",
                icon: "ScrollText",
            },
            {
                title: "PBG / SLF Permits",
                description:
                    "Building approval (PBG) and certificate of feasibility (SLF) — the modern replacement for IMB. Required for any new build, renovation, or rental license.",
                icon: "FileCheck2",
            },
            {
                title: "Due Diligence & Title Check",
                description:
                    "Zoning verification (zona hijau/kuning/merah), encumbrance search, tax clearance, and ownership history — completed before you transfer a single rupiah.",
                icon: "ShieldCheck",
            },
            {
                title: "Lease & Freehold Contracts",
                description:
                    "Bilingual leasehold (Hak Sewa) and freehold (Hak Milik via nominee/PMA) contracts drafted to international standards with arbitration clauses.",
                icon: "Handshake",
            },
            {
                title: "Tax Advisory & Reporting",
                description:
                    "BPHTB, PPN, withholding tax, and annual reporting for foreign owners and PMA entities — kept clean from day one.",
                icon: "Receipt",
            },
        ],
    },
    visa: {
        title: "Visa Services",
        eyebrow: "Stay legally, live freely",
        intro:
            "From a two-week holiday to a ten-year retirement — we match you to the right visa, handle the application, and keep you compliant year after year.",
        items: [
            {
                title: "Tourist Visa (VOA / B1)",
                description:
                    "Visa-on-arrival and B1 single-entry tourist visas — extendable up to 60 days. The simplest way to scout properties on your first visit.",
                icon: "Plane",
            },
            {
                title: "Golden Visa (5 & 10 Years)",
                description:
                    "Indonesia's investor residency — 5 or 10 years stay with no sponsor required. Open to individuals investing USD 350K+ or company directors.",
                icon: "Crown",
            },
            {
                title: "Digital Nomad / Remote Worker",
                description:
                    "Long-stay options for remote professionals earning income from outside Indonesia — including E33G and B211A multi-entry pathways.",
                icon: "Laptop",
            },
            {
                title: "KITAS — Investor",
                description:
                    "Two-year limited stay permit tied to your PT PMA. Includes multiple-entry, dependent visas, and pathway to KITAP (permanent).",
                icon: "Stamp",
            },
            {
                title: "KITAS — Retirement (55+)",
                description:
                    "One-year renewable retirement KITAS for applicants 55 and over. Includes housing, domestic helper, and driver allowances.",
                icon: "PalmtreeIcon",
            },
            {
                title: "KITAS — Work & Business (B211A)",
                description:
                    "Single or multi-entry business visas for professionals, consultants, and project workers. Renewable, with conversion paths to investor KITAS.",
                icon: "Briefcase",
            },
            {
                title: "KITAP — Permanent Stay",
                description:
                    "Five-year permanent residency for long-term KITAS holders and spouses of Indonesian citizens. Includes work rights and local pricing benefits.",
                icon: "Key",
            },
            {
                title: "Visa Extensions & Renewals",
                description:
                    "We track expiries, file extensions ahead of deadline, and handle annual MERP renewals so you never lapse on status.",
                icon: "RefreshCcw",
            },
        ],
    },
};

export const AREAS = [
    { name: "Uluwatu", note: "Clifftop ocean views", image: "https://images.unsplash.com/photo-1664918706173-6349ca225dd0?w=800&q=80&auto=format&fit=crop" },
    { name: "Canggu", note: "Surf & creative scene", image: "https://images.unsplash.com/photo-1569881347427-c861051db3f9?w=800&q=80&auto=format&fit=crop" },
    { name: "Seminyak", note: "Beach clubs & dining", image: "https://images.unsplash.com/photo-1651108066220-f61c22fc281f?w=800&q=80&auto=format&fit=crop" },
    { name: "Ubud", note: "Jungle & culture", image: "https://images.unsplash.com/photo-1654703943019-e519711ea124?w=800&q=80&auto=format&fit=crop" },
    { name: "Pererenan", note: "Quiet luxury rising", image: "https://images.unsplash.com/photo-1721222204632-bf9abe6f023f?w=800&q=80&auto=format&fit=crop" },
    { name: "Jimbaran", note: "Bay-front sunsets", image: "https://images.unsplash.com/photo-1675657144285-7daf131132de?w=800&q=80&auto=format&fit=crop" },
    { name: "Nusa Dua", note: "Resort-grade calm", image: "https://images.unsplash.com/photo-1634671651144-adbeca8623cb?w=800&q=80&auto=format&fit=crop" },
    { name: "Sanur", note: "Family-friendly coast", image: "https://images.unsplash.com/photo-1569881347427-c861051db3f9?w=800&q=80&auto=format&fit=crop" },
];

export const TEAM = [
    {
        name: "I Wayan Carita",
        role: "Founder & Director",
        bio: "Two decades sourcing land and villas across Bali. Personally inspects every signature listing.",
        location: "Canggu",
        image: "https://pin.it/5mNi1gDkQ",
    },
    {
        name: "Ni Rai Ratih",
        role: "Guest Relation Officer",
        bio: "Airbnb operations and client relations. Creating seamless experiences for guests and property owners alike.",
        location: "Canggu",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80&auto=format&fit=crop",
    },
    {
        name: "Fany",
        role: "Accounting",
        bio: "Financial operations and transaction management. Keeping every payment, record, and detail in perfect order.",
        location: "Canggu",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80&auto=format&fit=crop",
    },
    {
        name: "Abe",
        role: "Acquisitions Lead",
        bio: "Property sourcing and maintenance coordination. Helping clients find the right opportunities while keeping properties running smoothly.",
        location: "Canggu",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80&auto=format&fit=crop",
    },
    {
        name: "Theo Sinjal",
        role: "Marketing and Legal",
        bio: "Marketing strategy and legal affairs. Driving brand growth while ensuring compliance and business integrity.",
        location: "Ubud",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80&auto=format&fit=crop",
    },
    {
        name: "Aliyah",
        role: "Marketing",
        bio: "Marketing campaigns and brand communications. Helping businesses connect with the right audience and grow their presence.",
        location: "Ubud",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80&auto=format&fit=crop",
    },
];

export const TESTIMONIALS = [
    {
        quote: "Jaya Carita walked us through the entire legal process — from notary to KITAS. The villa in Pererenan was exactly as promised.",
        name: "Lukas & Marie",
        place: "Buyers from Berlin",
    },
    {
        quote: "I've worked with three agencies in Bali. This is the only team that genuinely protected our interests and didn't rush the contract.",
        name: "Aiko Tanaka",
        place: "Investor, Tokyo",
    },
    {
        quote: "Discreet, fast, and beautifully organized. They found our 3BR oceanfront in under two weeks.",
        name: "Daniel Ribeiro",
        place: "Buyer, São Paulo",
    },
];

export const FAQS = [
    {
        q: "Can foreigners legally own property in Bali?",
        a: "Foreigners cannot hold freehold (Hak Milik) directly, but can hold long leasehold (Hak Sewa) up to 30 years extendable, or use Hak Pakai / PT PMA structures for villas and investments. We guide you through the safest structure for your goals.",
    },
    {
        q: "What is the difference between leasehold and freehold?",
        a: "Freehold (Hak Milik) is full ownership, available only to Indonesian citizens. Leasehold (Hak Sewa) is a long-term lease — most foreign buyers choose 25–30 year leases with extension clauses, which is the standard luxury market route.",
    },
    {
        q: "Which visas do you assist with?",
        a: "KITAS (work, investor, retirement, second-home), B211A business visa (single & multiple entry), and renewal extensions. We coordinate the immigration paperwork from start to issued card.",
    },
    {
        q: "Do you handle the notary and due diligence?",
        a: "Yes. Our partnered notaries handle the AJB/PPJB, title verification, zoning checks (zona hijau/kuning), tax compliance, and contract drafting — all in English with sworn translation.",
    },
    {
        q: "How long does the buying process take?",
        a: "From offer accepted to keys in hand: typically 4–8 weeks for villas with clean titles. Land or off-plan projects may take longer depending on permits (PBG/SLF) and structural setup.",
    },
];
