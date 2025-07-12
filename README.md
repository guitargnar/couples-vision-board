# Our Vision Board - Private Couple's Vision Board Application 💕

A beautiful, private digital vision board designed for couples to store, organize, and visualize their shared dreams, goals, plans, and rituals together.

## 📱 Mobile Access for Couples

### Quick Start (Same WiFi Network)
**Both partners can use the app on mobile devices when connected to the same WiFi!**

1. **Start the server** (on the computer):
   ```bash
   cd "vision_board_app/vision-board"
   npx vite --host
   ```

2. **Connect from mobile devices**:
   - **Local Computer**: http://localhost:5174/
   - **Mobile/Other Devices**: http://10.2.1.170:5174/
   
   *(Replace the IP address with your current network IP - check terminal output)*

3. **Add to Home Screen** (iOS/Android):
   - Open the URL in your mobile browser
   - iOS: Tap Share → "Add to Home Screen"
   - Android: Tap Menu (⋮) → "Add to Home Screen"
   - The app will behave like a native mobile app!

### 🌐 Options for Remote Access

#### Option 1: Same WiFi Network (Easiest)

- **Perfect for**: Home use, when both partners are on the same WiFi
- **Setup**: Use the instructions above
- **Pros**: Simple, private, no internet required
- **Cons**: Only works when on the same network

#### Option 2: GitHub Pages (Recommended for Remote Access)

- **Perfect for**: Access from anywhere, anytime
- **Live URL**: https://guitargnar.github.io/couples-vision-board/
- **Setup**: Automatically deployed when code is pushed to GitHub
- **Pros**: Always available, fast, free hosting
- **Cons**: Public URL (but app data stays private on your device)

#### Option 3: Tunneling Service (For Remote Access)

- **Perfect for**: When partners are in different locations
- **Tools**: ngrok, CloudFlare Tunnel, or LocalTunnel
- **Example with ngrok**:
  ```bash
  # Install ngrok first, then:
  ngrok http 5174
  # Share the provided URL with your girlfriend
  ```

#### Option 4: Deploy to Hosting (Always Accessible)

- **Perfect for**: Permanent access from anywhere
- **Options**: Netlify, Vercel, GitHub Pages
- **Setup**: Build and deploy the `dist` folder
- **GitHub Pages**: Automatically deployed at https://guitargnar.github.io/couples-vision-board/

## 🎯 Features

### Content Types
- **Quick Notes** 📝 - Capture spontaneous ideas and thoughts
- **Goals** 🎯 - Set and track meaningful objectives together
- **Plans** 📅 - Organize detailed planning items with dates
- **Rituals** 🔄 - Document recurring activities and traditions
- **Images** 🖼️ - Add visual inspiration and memories

### Beautiful Design
- 🎨 Warm coral and teal color palette designed for couples
- 📱 Fully responsive - works perfectly on mobile devices
- 🖱️ Intuitive drag-and-drop interface
- 🎭 Pinterest-style masonry layout
- ✨ Smooth animations and hover effects

### Functionality
- **Drag & Drop** - Easily reposition items on your board
- **Categories** - Organize by Love & Relationships, Travel & Adventure, Career & Growth, Health & Wellness, Home & Family, Personal Development
- **Likes System** - Show appreciation for each other's ideas
- **Local Storage** - All data is saved privately on your device
- **Filtering** - View items by category
- **Statistics** - Track your progress with item counts and engagement

### Privacy & Security
- 🔒 **100% Private** - All data stays on your local device
- 🌐 **No Internet Required** - Works completely offline after initial setup
- 👤 **No Account Needed** - No sign-ups or personal information required
- 🛡️ **Secure** - Your dreams and goals remain completely private

## 🚀 Setup Instructions

### Prerequisites
- Node.js (Download from https://nodejs.org)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation
1. **Navigate to the project**:
   ```bash
   cd "Couples Vision Board for Ideas, Plans, and Rituals/vision_board_app/vision-board"
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**:
   ```bash
   # For local use only:
   npm run dev
   
   # For mobile/network access:
   npx vite --host
   ```

4. **Open in browser**:
   - Local: http://localhost:5173/ or http://localhost:5174/
   - Network: Check terminal for your network IP

### Building for Production
```bash
# Create optimized build
npm run build

# Preview the build
npm run preview
```

## 📱 Mobile Optimization

The app is fully optimized for mobile devices with:
- **Touch-friendly interface** - Large buttons and touch targets
- **Responsive design** - Adapts to all screen sizes
- **Mobile gestures** - Touch and drag support
- **PWA capabilities** - Can be added to home screen
- **Offline functionality** - Works without internet after loading

### Mobile Tips
- **Landscape mode** works great for vision boarding
- **Pinch to zoom** if you need to see details
- **Long press** items for additional options
- **Pull to refresh** the page if needed

## 🎮 How to Use

### Getting Started
1. **Add Your First Item**
   - Tap the "Add Item" button
   - Choose a content type (Note, Goal, Plan, Ritual, or Image)
   - Fill in the title and description
   - Select an appropriate category
   - Tap "Add to Vision Board"

2. **Organize Your Board**
   - Drag items around to arrange them as you like
   - Use the category filter to focus on specific areas
   - Like items to show support for each other's ideas

3. **Build Your Vision Together**
   - Add items representing your shared dreams
   - Include both short-term plans and long-term goals
   - Document your special rituals and traditions
   - Add inspiring images and visual references

### Tips for Couples
- 💑 **Take Turns Adding Items** - Make it a collaborative experience
- 📅 **Regular Review Sessions** - Set aside time to review and update your board
- 🎉 **Celebrate Progress** - Use the like feature to celebrate achievements
- 📝 **Be Specific** - Add detailed descriptions to make goals more actionable
- ⏰ **Include Timelines** - Use the Plans category for time-sensitive items
- 🖼️ **Visual Inspiration** - Add images that represent your dreams and goals

## 💾 Data Storage

All your vision board data is stored locally in your browser's storage. This means:
- ✅ Complete privacy - no data leaves your device
- ✅ Fast performance - no internet required
- ✅ Always available - works offline
- ⚠️ **Important**: Data is device-specific - each device has its own storage

### Sharing Data Between Devices
Since data is stored locally, here are options for sharing:
1. **Export/Import**: Manually export JSON data and import on other devices
2. **Screenshots**: Take photos of your board to share visually
3. **Recreate**: Add the same items on each device
4. **Future**: Consider cloud sync if needed

## 🔧 Technical Details

### Built With
- **React 19** - Modern UI framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations

### Browser Support
- ✅ Chrome/Edge (recommended for mobile)
- ✅ Firefox
- ✅ Safari (iOS/macOS)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- **Fast loading** - Optimized bundle size
- **Smooth animations** - Hardware-accelerated transitions
- **Responsive** - Adapts to any screen size
- **Offline capable** - Works without internet connection

## 🛠️ Customization

The application can be easily customized:
- **Colors and themes** in `src/App.css`
- **Content types and categories** in `src/App.jsx`
- **Add new features** by modifying React components

## 🐛 Troubleshooting

### Common Issues
- **"npm not found"**: Install Node.js first
- **Port already in use**: The app will automatically find another port
- **Mobile can't connect**: Ensure both devices are on the same WiFi
- **Data not syncing**: Each device stores data locally - this is by design for privacy

### Mobile-Specific Issues
- **App not loading on mobile**: Check firewall settings on your computer
- **Touch not working**: Try refreshing the page
- **Layout issues**: Try rotating device or refreshing

### Getting Help
1. Check the terminal output for error messages
2. Try refreshing the browser
3. Restart the development server
4. Clear browser cache if needed

## 📋 Development Commands

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server (local only)
npm run dev

# Start with network access (for mobile)
npx vite --host

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Your app will be available at a public URL

### Option 2: Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

### Option 3: GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 💝 Created with Love

This application was designed specifically for couples who dream together. Every feature was crafted to encourage collaboration, celebration, and shared visioning.

**Features designed for couples:**
- 💕 Warm, loving color palette
- 🤝 Collaborative interface
- 🎉 Celebration through likes
- 🏠 Private and secure
- 📱 Accessible anywhere

---

**Happy visioning together!** ✨💕

## 📱 Quick Mobile Setup Reminder

1. **Start server**: `npx vite --host`
2. **Connect mobile**: Use the Network URL shown in terminal
3. **Add to home screen**: Use your browser's "Add to Home Screen" option
4. **Enjoy**: Create your vision board together!

*Current Network URL: http://10.2.1.170:5174/*
