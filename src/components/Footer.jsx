export default function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-200 dark:bg-gray-800 text-sm dark:text-gray-300">
      © {new Date().getFullYear()} SoftSell. All rights reserved.
    </footer>
  );
}
