<section id="internet" className="relative z-10 bg-white px-6 py-12 sm:py-14">
  <div className="mx-auto max-w-7xl">
    <div className={sectionHeaderClass}>
      <p className={eyebrowClass}>Internet packages</p>
      <h2 className={sectionTitleClass}>Fast & Reliable Internet Packages</h2>
      <p className={sectionTextClass}>
        Get stable fiber internet for homes, apartments, shops, offices, and
        small businesses.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
      {internetPlans.map((plan) => (
        <div key={plan.name} className={cardClass}>
          ...
        </div>
      ))}
    </div>
  </div>
</section>;
