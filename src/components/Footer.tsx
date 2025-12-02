export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ayush Singh.Built with ❤️ and lots of coffee.
        </p>
      </div>
    </footer>
  );
};
