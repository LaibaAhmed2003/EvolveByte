const Services = () => {
  return (
    <div className="Services-container" id="services">
      <p className="heading">Services</p>
      <h2 className="second-heading" style={{ padding: "20px 0px 10px 0px" }}>
        {/* how we help <span>brands grow</span> with SEO? */}
        Attract - <span>Engage</span> - Convert
      </h2>
      <p style={{ padding: "0px 0px 20px 0px" }}>
        From creating your digital identity to managing your complete brand
        growth{" "}
      </p>
      <div className="services">
        <div className="">
          <h3 className="service-name">Website design and development</h3>
          <p>➜ Custom website design</p>
          <p>➜ Wordpress web designing</p>
          <p>➜ Webflow web designing</p>
          <p>➜ Wix website designing</p>
          <p>➜ Squarespace web design</p>
          <p>➜ Web hosting & migration</p>
          <br />
          <h4 className="invest">⤷ Investment Required: $500 - $2000</h4>
        </div>

        <div className="">
          <h3 className="service-name">Copywriting & SEO</h3>
          <p>➜ Website Copywriting</p>
          <p>➜ Sales Copywriting</p>
          <p>➜ Ads Copywriting</p>
          <p>➜ Email Copywriting</p>
          <p>➜ Newsletter writing</p>
          <p>➜ Sales funnel creation</p>
          <br />
          <h4 className="invest">⤷ Investment Required: $700 - $1500/Month</h4>
        </div>

        {/* <div className="">
          <h3 className="service-name">SEO</h3>
          <p>➜ Onpage SEO</p>
          <p>➜ Offpage SEO</p>
          <p>➜ Technical SEO</p>
          <p>➜ SEO Articles & Blog posts</p>
          <p>➜ Blog management</p>
          <p>➜ Backlinking</p>
          <p>⤷ Investment Required: $700 - $1100/Month</p>
        </div> */}

        <div className="">
          <h3 className="service-name">Linkedin</h3>
          <p>➜ LinkedIn Profile optimization</p>
          <p>➜ LinkedIn Content Strategy</p>
          <p>➜ Linkedin Content Creation</p>
          <p>➜ LinkedIn personal branding</p>
          <p>➜ LinkedIn networking Strategy</p>
          <p>➜ Monthly Analytics Report</p>
          <br />
          <h4 className="invest">⤷ Investment Required: $800 - $1100/Month</h4>
        </div>
      </div>
    </div>
  );
};
export default Services;
