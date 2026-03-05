# PetPals 🐾

PetPals is a modern, responsive web application designed to connect pet owners with professional veterinary services and specialized pet care. From booking consultations to managing grooming and nutrition, PetPals serves as a one-stop solution for pet wellness.

**Live Demo:** [https://palsvet.netlify.app/](https://palsvet.netlify.app/)

---

## 🚀 Features

- **Veterinary Services:** Easily explore medical services, emergency care, and routine checkups.
- **Specialized Care:** Dedicated sections for pet grooming, training, and specialized nutritional plans.
- **Headless CMS Integration:** Powered by **Sanity.io**, allowing for dynamic content updates without redeploying the frontend.
- **Responsive UI:** A clean, mobile-first design ensuring a seamless experience across all devices.
- **Service Categories:** Organized navigation for various pet needs, including vaccinations and wellness plans.

## 🛠️ Tech Stack

- **Frontend:** [React.js](https://reactjs.org/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Content Management:** [Sanity.io](https://www.sanity.io/)
- **Deployment:** [Netlify](https://www.netlify.com/)

---

## 📂 Project Structure

```text
├── petpals-sanity/    # Sanity Studio (Schemas and CMS configuration)
├── src/               # React components, pages, and application logic
├── public/            # Static assets (images, icons, etc.)
├── index.html         # Entry point
└── vite.config.js     # Vite configuration

##⚙️ Configure Environment Variables
Create a .env file in the root directory:

Plaintext
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production

## ▶️ Run the Project

```bash
npm run dev
## 🔮 Future Enhancements

- 🚑 **Booking System:** *Real-time appointment scheduler with veterinarians.*
- 🐾 **Pet Profiles:** *User-specific dashboards to track pet medical history.*
- 🛒 **E-commerce:** *Integrated shop for pet food and medicines.*
- 💬 **Community Forum:** *A social space for pet parents to connect.*

##🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you have ideas to improve PetPals.

##📄 License
This project is licensed under the MIT License.
