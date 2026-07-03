/* ==========================================================================
   CONFIG
   ========================================================================== */
(function (Portfolio) {
  'use strict';

  Portfolio.config = {
    brand: {
      name: 'underscore',
      role: 'Researcher',
    },
    typing: {
      words: [
        'Cyber Security Researcher',
        'Reverse Engineer',
        'Malware Creator',
        'Software Developer',
        'Open Source Contributor',
      ],
      typeSpeed: 62,
      eraseSpeed: 34,
      holdMs: 1400,
    },
    contact: [
      {
        label: 'Telegram',
        value: '@underscore000_',
        href: 'https://t.me/underscore000_',
        icon: 'bi-telegram',
      },
      {
        label: 'Discord',
        value: 'underscore000_',
        href: 'https://discord.com/users/1100417701207363715',
        icon: 'bi-discord',
      },
    ],
  };

  Portfolio.projects = [
    {
      name: 'Darkresearcher',
      slug: 'darkresearcher',
      desc: 'A tool search software for osint, ethical hacking, databreach collection and user information',
      tags: ['Python', 'JavaScript', 'HTML', 'CSS', 'Static Analysis'],
      image: 'assets/images/projects/darkresearcher.png',
      repo: '#the-code-is-not-open-source',
      category: 'DarkResearcher-Applications',
    },
    {
      name: 'Darkresearcher · ModalitySpy',
      slug: 'modalityspy',
      desc: 'A complete software to monitor android devices even with newer versions (15/16)',
      tags: ['Python', 'Kotlin', 'C++', 'Assembly'],
      image: 'assets/images/projects/modalityspy.png',
      repo: '#the-code-is-not-open-source',
      category: 'DarkResearcher-Applications',
    },
    {
      name: 'Darkresearcher · Browser',
      slug: 'browser',
      desc: 'A full-featured browser with a focus on user privacy, searches are disguised through the Tor network.',
      tags: ['C++'],
      image: 'assets/images/projects/browser.png',
      repo: '#the-code-is-not-open-source',
      category: 'DarkResearcher-Applications',
    },
    {
      name: 'Time2cry',
      slug: 'time2cry',
      desc: 'One of the most dangerous ransomware ever created, once under its effect it will be impossible to recover the encrypted files.',
      tags: ['C#', 'Cryptography'],
      image: 'assets/images/projects/time2cry.png',
      repo: 'https://time2cry.pythonanywhere.com',
      category: 'Ransomware',
    },
    {
      name: 'Firmware Inspector',
      slug: 'firmware-inspector',
      desc: 'Professional-grade firmware and low-level system security auditing framework for x86-64 platforms, providing read-only analysis of CPU, UEFI/BIOS, ACPI, TPM, Secure Boot, and hardware security features.',
      tags: ['C', 'C++', 'Assembly'],
      image: 'assets/images/projects/firmware_inspector.png',
      repo: 'https://github.com/Underscore0000/Firmware-Security-Inspector-FSI-',
      category: 'Tools',
    },
    {
      name: 'Abyss Toolkit',
      slug: 'abyss-toolkit',
      desc: 'Comprehensive security assessment platform integrating network reconnaissance, web application analysis, OSINT intelligence gathering, vulnerability discovery, and automated reporting into a single modern desktop application.',
      tags: ['Java'],
      image: 'assets/images/projects/abyss_toolkit.png',
      repo: 'https://github.com/Underscore0000/Abyss-Toolkit-Java',
      category: 'Tools',
    },
    {
      name: 'CH512 Encryption',
      slug: 'ch512',
      desc: 'Experimental 512-bit symmetric block cipher implemented in pure C, featuring authenticated encryption, modern key derivation, constant-time primitives, and a modular architecture for cryptographic research and performance evaluation.',
      tags: ['C', 'Cryptography', 'Python'],
      image: 'assets/images/projects/ch512.png',
      repo: 'https://github.com/Underscore0000/CH512',
      category: 'Tools',
    },
  ];

  Portfolio.skills = [
    { name: 'Python', icon: 'bi-filetype-py', level: 85 },
    { name: 'Assembly', icon: 'bi-cpu', level: 60 },
    { name: 'C', icon: 'bi-filetype-c', level: 85 },
    { name: 'C++', icon: 'bi-filetype-cpp', level: 70 },
    { name: 'C#', icon: 'bi-filetype-cs', level: 82 },
    { name: 'JavaScript', icon: 'bi-filetype-js', level: 88 },
    { name: 'HTML5', icon: 'bi-filetype-html', level: 95 },
    { name: 'CSS3', icon: 'bi-filetype-css', level: 90 },
    { name: 'Java', icon: 'bi-filetype-java', level: 78 },
    { name: 'Kotlin', icon: 'bi-android2', level: 75 },
    { name: 'Flutter', icon: 'bi-phone', level: 60 },
  ];

  Portfolio.stats = [
    { num: '25+', label: 'Projects' },
    { num: '11+', label: 'Languages' },
    { num: '4+', label: 'Years Learning' },
    { num: '10+', label: 'Open Source' },
  ];

})(window.Portfolio = window.Portfolio || {});