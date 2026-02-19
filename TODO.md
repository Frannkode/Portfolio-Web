# Fix Double Scrollbar Issue

## Tasks
- [x] Remove min-h-screen from App.jsx main div to prevent double height stacking
- [ ] Verify that only Hero section has min-h-screen for proper viewport height
- [ ] Test scrolling behavior to ensure single scrollbar functionality
- [ ] Ensure no layout breaks or animation issues

## Notes
- App.jsx currently has min-h-screen on the root div
- Hero.jsx also has min-h-screen
- This causes total height > 100vh leading to double scrollbars
- Removing from App.jsx should fix the issue while maintaining layout
