# 🌐 Personal Portfolio Website  

A responsive and interactive **Portfolio Website** built using **HTML, CSS, and JavaScript**.  
This project showcases my skills, projects, and achievements, and includes a **contact form integrated with EmailJS** to directly receive emails from visitors.  

---

## 🚀 Features  
- ✅ **Responsive Design** – Works smoothly across mobile, tablet, and desktop.  
- 🎨 **Modern UI/UX** – Clean layout with smooth transitions and animations.  
- 📂 **Projects Section** – Showcases my work and achievements.  
- 📧 **EmailJS Integration** – Directly receive messages via contact form.  
- 🌟 **Lightweight & Fast** – No heavy frameworks, just pure HTML, CSS, and JavaScript.  

---

## 🛠️ Technologies Used  
- **HTML5** – Structure and semantic markup  
- **CSS3** – Styling with animations and responsive design  
- **JavaScript (Vanilla JS)** – Interactivity and dynamic features  
- **EmailJS** – Contact form functionality  

---

## 📬 Contact Form (EmailJS Setup)  
1. Create an account on [EmailJS](https://www.emailjs.com/).  
2. Create an Email Service and Template.  
3. Copy your `Service ID`, `Template ID`, and `Public Key`.  
4. Add them to your JavaScript file:  

```javascript
emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")

