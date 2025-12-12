import drillGuide from '/src/assets/tools/drill_guide.png';
import handles from '/src/assets/tools/handles.png';
import shims from '/src/assets/tools/shims.png';
import speedSquare from '/src/assets/tools/speed_square.png';
import forstnerBit from '/src/assets/tools/forstner_bit.png';

export const products = [
    {
        id: 1,
        name: "Boreskabelon til greb",
        description: "Sikrer præcis boring af huller til greb.",
        price: 249,
        image: drillGuide,
        category: "Boring"
    },
    {
        id: 2,
        name: "Møbelgreb",
        description: "Elegante greb til dine skabe.",
        price: 129,
        image: handles,
        category: "Tilbehør"
    },
    {
        id: 3,
        name: "Knudsen Kiler",
        description: "Til præcis opklodsning og nivellering.",
        price: 99,
        image: shims,
        category: "Montering"
    },
    {
        id: 4,
        name: "Tømrervinkel",
        description: "Uundværlig til opmærkning og vinkler.",
        price: 149,
        image: speedSquare,
        category: "Måling"
    },
    {
        id: 5,
        name: "Hængselbor",
        description: "Til boring af huller til hængsler.",
        price: 199,
        image: forstnerBit,
        category: "Boring"
    }
];

export const projects = [
    {
        id: 1,
        title: "Byggevejledning - Bænk - Metod",
        description: "Byg en smuk bænk med opbevaring baseret på IKEA Metod.",
        image: "https://www.yaay.dk/cdn/shop/files/IMG_6759_jpg.jpg?v=1740749044",
        price: 295,
        tools: [1, 3, 5, 6] // Vaterpas, Skruetvinger, Boremaskine, Stiksav
    },
    {
        id: 2,
        title: "Byggevejledning - Hesteskoskab - Metod",
        description: "Et hestesko-skab er en genial løsning til små rum, hvor det kan være svært at finde plads til et regulært skab. Hestesko-skabe skaber små hyggelige kroge omkring sengen og en kæmpe wow-oplevelse for rummet som helhed.",
        image: "https://www.yaay.dk/cdn/shop/files/EB62E860-9BB2-416D-A8DA-E6B4C4D6976C2.jpg?v=1710973307",
        price: 395,
        tools: [1, 5, 6]
    },
    {
        id: 3,
        title: "Byggevejledning - Garderobeskab - Metod",
        description: "Skab dit drømmegarderobeskab med Metod moduler.",
        image: "https://www.yaay.dk/cdn/shop/files/YAAY11.jpg?v=1710926323",
        price: 350,
        tools: [1, 3, 5]
    },
    {
        id: 4,
        title: "Byggevejledning - Skråskab - Metod",
        description: "Udnyt pladsen under skråvæggen optimalt.",
        image: "https://www.yaay.dk/cdn/shop/files/IMG_4038_Original.jpg?v=1740526209",
        price: 395,
        tools: [1, 2, 5, 6] // Konturmåler is good for angles
    },
    {
        id: 5,
        title: "Byggevejledning - Garderobeskab - Pax",
        description: "Indbyg dine PAX skabe for et eksklusivt look.",
        image: "https://www.yaay.dk/cdn/shop/files/IMG_1141_Original2.jpg?v=1713989362",
        price: 350,
        tools: [1, 3, 5]
    },
    {
        id: 6,
        title: "Byggevejledning - Reol - Metod",
        description: "Den klassiske indbyggede reol. Kræver ingen specialværktøj.",
        image: "https://www.yaay.dk/cdn/shop/files/IMG_3945_2.jpg?v=1732921498",
        price: 495,
        tools: [1, 3, 5, 6]
    },
    {
        id: 7,
        title: "Byggevejledning - Reol rundt om dør - Metod",
        description: "Ram din dør ind med en smuk reol.",
        image: "https://www.yaay.dk/cdn/shop/files/IMG_5399_redigeret3.jpg?v=1732922703",
        price: 495,
        tools: [1, 2, 3, 5]
    },
    {
        id: 8,
        title: "Byggevejledning - Hul til TV",
        description: "Integrer dit TV i reolen.",
        image: "https://www.yaay.dk/cdn/shop/files/Billede_16.06.2025_09.42.48.jpg?v=1750937589",
        price: 65,
        tools: [1, 5]
    },
    {
        id: 9,
        title: "Byggevejledning - Vaskeskab - Metod",
        description: "Skjul vaskemaskine, tørretumbler eller vaskesøjle med stil.",
        image: "https://www.yaay.dk/cdn/shop/files/IMG_3767_Original.jpg?v=1758720586",
        price: 395,
        tools: [1, 3, 5]
    }
];
