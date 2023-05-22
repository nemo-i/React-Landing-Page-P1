export default function MainContent() {
  return (
    <div className="main-content">
      <TextSection />
      <HeroImage />
    </div>
  );
}

function TextSection() {
  return (
    <div className="text-section">
      <h2>
        A Thought- <br /> Provoking Headline
      </h2>
      <p>
        A quick value proposition that will make your visitors want to click on
        or sign up for your offer.
      </p>
      <SignSection />
    </div>
  );
}

function SignSection() {
  return (
    <div className="sign-section">
      <input type="email" placeholder="Insert email address" />
      <button>Sign Up</button>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="hero-image">
      <div className="hero-image-back"></div>
      <div className="hero-image-front">
        <h3>Hero Image</h3>
        <p>that highlights yourproduct or its value</p>
      </div>
    </div>
  );
}
