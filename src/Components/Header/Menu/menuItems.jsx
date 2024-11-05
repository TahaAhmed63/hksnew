const menuItems = [
    { id: 1, label: 'Home', path: '/' },
    { 
        id: 2, 
        label: 'About us', 
        path: '/about-us',
        submenu: [
            { id: 21, label: 'Careers', path: '/about-us/careers' },
            { id: 22, label: 'Our Mission', path: '/about-us/our-mission' },
            { id: 23, label: 'Our Vision', path: '/about-us/our-vision' }
        ]
    },
    { id: 3, label: 'Products', path: '/shop' },
    { id: 4, label: 'Gallery', path: '/gallery' },
    { id: 5, label: 'Ambassadors', path: '/ambassadors' },
    { id: 6, label: 'Contact us', path: '/contact-us' },
];

  
  export default menuItems;