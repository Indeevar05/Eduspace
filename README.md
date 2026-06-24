# PopX Mobile App 🚀

Welcome to the **PopX Mobile App** frontend assessment! This project is a pixel-perfect React JS application engineered strictly based on the provided Adobe XD design specifications.

## 🔗 Live Demo
*Assuming your Vercel is connected, insert your live demo link here:*
[**Live Application Link**](https://popx-app-ten-steel.vercel.app/)

---

## ✨ Key Features & Enhancements

### 🎨 Pixel-Perfect UI Design
- The application perfectly mirrors the Adobe XD constraints, ensuring an identical user experience.
- Strict adherence to the `Rubik` Google font and extracted exact HEX codes for the brand purple (`#6C25FF`), error red (`#DD4A3D`), and other core typography parameters.
- **Custom Form Fields:** Developed complex floating cut-out labels that seamlessly transition color on active focus states.
- **Micro-Interactions:** Included subtle hover animations, active scaling on buttons, and stylized custom radio inputs replacing standard browser defaults.

### 📱 Integrated Viewport Testing Suite
To facilitate rapid testing for reviewers, the application includes a **global viewport selector toolbar** at the top of the interface. This instantly constrains the application wrapper, allowing reviewers to verify responsiveness seamlessly:
- **Mobile View (375px):** Mimics standard mobile dimensions with a fluid edge-to-edge layout matching the design.
- **Tablet View (768px):** Constrains the view for mid-sized devices.
- **Responsive View:** Transforms the application into a beautifully elevated, bordered card to provide a luxurious "app-in-browser" desktop experience.

### ⚡ Rapid Testing Auto-Populate
A convenient "Auto-Populate" feature has been built directly into the Login and Signup flows. Clicking this button instantly injects predefined dummy data into the forms (specifically matching the `Marry Doe` Profile specifications) to bypass manual typing during the evaluation process.

### 🛡️ Strict Frontend Validation
Integrated robust frontend form validations prior to submission:
- **Email:** Standard formatting checks using Regular Expressions.
- **Phone Number:** Validated to strictly accept 10-digit numerical structures.
- **Password:** Constrained to a minimum of 6 characters.
- **Full Name:** Minimum 3 character restriction.

### 🔔 Custom Toast Notifications
We utilized `react-hot-toast` to provide premium, styled notification alerts. Error validations and successful routing commands trigger dynamic visual cues matching the application's core aesthetic.

### 🌟 Extra UX Improvements (Beyond Original Specs)
While adhering strictly to the pixel-perfect requirements, we engineered several enhancements to elevate the application's usability and standard:
1. **Back Navigation:** Added an intuitive "Back" button to the authentication screens (Login & Signup) so users aren't trapped if they click the wrong button from the landing page.
2. **Micro-Interactions:** Added active state scaling `transform: scale(0.98)` to buttons and smooth CSS transitions on inputs to make the application feel tactile and responsive.
3. **Smart Auto-Populate Bypass:** Designed an integrated "AutoPopulate Test Data" button specifically for the reviewer to save time. It strictly pre-fills the form with the required `Marry Doe` Profile specifications automatically.
4. **Toast Notifications System:** Hooked up a robust frontend notification system (`react-hot-toast`) to provide immediate feedback on account creation, logging in, logging out, and form validation errors.
5. **Strict Data Validation:** Engineered client-side validation logic (Regex for Emails and exact 10-digit Phone numbers) to prevent malformed data submissions, which was not explicitly defined in the UI design but is crucial for a production-ready application.

---

## 🛠️ Technology Stack
- **Framework:** React 18 (Bootstrapped with Vite)
- **Routing:** React Router v6
- **Styling:** Pure CSS (CSS Custom Properties/Variables) - No external heavy CSS frameworks were utilized to ensure maximum control over the pixel-perfect requirements.
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

---

## ⚙️ Local Installation & Setup

If you would like to run the application locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Indeevar05/Eduspace.git
   cd Eduspace
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the Application:**
   Open your browser and navigate to `http://localhost:5173`

---

## 🧭 Application Flow
1. **Landing Page (`/`):** The initial entry point prompting users to either Create an Account or Login.
2. **Signup Page (`/signup`):** Collects comprehensive user data with strict validation checks. Success redirects to the Profile dashboard.
3. **Login Page (`/login`):** Standard authentication portal. Success redirects to the Profile dashboard.
4. **Profile Page (`/profile`):** Displays user data (Marry Doe) with a mock camera upload functionality and a secure logout feature.

---

*This project was meticulously developed to showcase precision in UI development, responsive architecture, and a streamlined user experience.*
