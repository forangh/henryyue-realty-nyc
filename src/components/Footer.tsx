const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Hongyu (Henry) Yue</h3>
          <p className="text-primary-foreground/80 mb-6">
            Licensed New York Real Estate Agent
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 mb-8">
            <span className="text-primary-foreground/80">📞 718-717-5210</span>
            <span className="text-primary-foreground/80">✉️ forangh@gmail.com</span>
            <span className="text-primary-foreground/80">📍 Queens • Long Island • NYC</span>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Henry Yue Real Estate. Licensed Real Estate Professional in New York State.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;