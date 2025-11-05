# **App Name**: FeeSahayak AI

## Core Features:

- AI Fee Query Chatbot: Utilize the Gemini API to answer student fee-related questions with simple context handling and personalized replies. This chatbot uses the tool to intelligently reason about including balance, due date, and payment history.
- Student Fee Dashboard: Display total fees, paid amount, pending amount, and next due date. Show the last 5 payments in a table, using Chart.js for payment trends.
- Fee Installment Calculator: Provide a simple installment calculator displaying Indian-style monthly installments in rupees.
- Razorpay Payment Integration: Integrate Razorpay's test mode payment flow with a secure form, basic validation, and payment status notifications.
- User Authentication: Implement email/password login/registration with Firebase Authentication to protect the dashboard and chat pages.
- Fee Data Management: Store and manage fee-related data, connecting the backend to Firestore. Allows administrators to set and update user payment details and installments.
- Admin Announcements: Allow administrators to send announcements via a simple message box, displaying information to all students. The Chatbot has the tool to respond to user questions regarding Announcements by retreiving this information from the announcements tab

## Style Guidelines:

- Primary color: Saffron (#FF9933), drawing inspiration from traditional Indian colors, providing warmth and trust. Note: a more desaturated shade will ultimately be used.
- Background color: Light beige (#F5F5DC), a soft and desaturated hue of the primary color for a calming and subtle base.
- Accent color: Teal (#008080), an analogous color to add contrast and highlight important interactive elements.
- Body font: 'PT Sans', a humanist sans-serif font, providing a modern look and feel with good readability.
- Headline font: 'Playfair', a modern serif similar to Didot, with an elegant, fashionable, high-end feel. Note: pairing with 'PT Sans' for longer text.
- Use icons with an Indian touch, such as the Rupee symbol, books, and graduation caps, styled in an outline manner.
- A clean and modern layout with sections for fees, payments, and chatbot, utilizing Tailwind CSS grid and flexbox for responsiveness.