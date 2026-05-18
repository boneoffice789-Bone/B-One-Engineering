{
  "hosting": {
    "public": ".",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**", "README.md"],
    "rewrites": [
      { "source": "/", "destination": "/index.html" },
      { "source": "/about", "destination": "/about.html" },
      { "source": "/services", "destination": "/services.html" },
      { "source": "/products", "destination": "/products.html" },
      { "source": "/brands", "destination": "/brands.html" },
      { "source": "/portfolio", "destination": "/portfolio.html" },
      { "source": "/contact", "destination": "/contact.html" },
      { "source": "/login", "destination": "/login.html" },
      { "source": "/register", "destination": "/register.html" },
      { "source": "/profile", "destination": "/profile.html" },
      { "source": "/cart", "destination": "/cart.html" },
      { "source": "/checkout", "destination": "/checkout.html" },
      { "source": "/orders", "destination": "/orders.html" },
      { "source": "/admin/**", "destination": "/admin/index.html" }
    ]
  }
}
