// test.describe('Navigation', () => {
//   test.describe('Static pages', () => {
//     test('should take screenshot of the homepage', async ({ page }) => {
//       await page.goto('/');

//       await expect(
//         page.getByRole('heading', {
//           name: 'Boilerplate code for your Nextjs project with Tailwind CSS',
//         }),
//       ).toBeVisible();

//       await percySnapshot(page, 'Homepage');
//     });

//     test('should take screenshot of the about page', async ({ page }) => {
//       await page.goto('/about');

//       await expect(
//         page.getByRole('link', {
//           name: 'About',
//         }),
//       ).toBeVisible();

//       await percySnapshot(page, 'About');
//     });
//   });
// });
