import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Pico-Ducky',
        description:"My team and I developed Pico-Ducky, a USB Rubber Ducky-like device using a Raspberry Pi Pico W for cybersecurity testing. I implemented the device’s core functionality with C/C++ via ArduinoIDE, enabling it to exploit Windows vulnerabilities and establish reverse shells. The project involved developing scripts for automated keystroke injection, leveraging Raspberry Pi Pico W’s capabilities, and comprehensive documentation to support ethical hacking practices.",
        tools: ["raspberry pi pico w", "ArduinoIDE", "C/C++", "Azure"],
        role: 'Embedded Systems Developer/ Software Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Line Follower Robot',
        description: 'As part of a collaborative team effort, we designed, built, and programmed multiple versions of line follower robots using ArduinoUNO, ESP32, TCRT5000 & QTR Sensors, and Encoders. Using ArduinoIDE and PlatformIO for software development, and utilizing OnShape and SolidWorks for design, I aimed to create robots adept at navigating challenging courses swiftly and precisely, demonstrating proficiency in robotics, electronics, and C/C++ programming.',
        hardware: ['ArduinoUNO', 'ESP32', 'TCRT5000' , 'QTR Sensors', 'Encoders'],
        software: ['ArduinoIDE', 'PlatformIO','C/C++'],
        role: 'Hardware Engineer/ Software Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'PHP-Authentication-System',
        description: 'Developed a PHP authentication system for a login and signup website with email verification. Utilized PHP, SQL, XAMPP, and Vscode to create a modular system designed for easy integration into various projects, streamlining development and ensuring security.',
        tools: ['PHP', 'SQL', 'XAMPP', 'Vscode'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Energy Sense',
        description: "Energy-sense is an advanced electrical energy monitoring platform that measures and logs home energy consumption data through a custom device. Users access this data via a mobile app, enabling precise management and optimization of energy usage from various devices and circuits.",
        tools: ["esp32", "platformio", "react-native", "mongodb", "flask", "python"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Hardware Engineer/ Backend Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },