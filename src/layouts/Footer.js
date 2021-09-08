import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-row">
        <div>
        <ul className="mb-md-3 mt-md-2 footer-ul navbar-nav-ul">
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  href="https://tvplus.com.tr/terms-of-use"
                >
                  Kullanım Koşulları
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  href="https://tvplus.com.tr/privacy-and-security"
                >
                  Gizlilik Sözleşmesi
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  href="/Kumanda-kurulumu-cihaz-kodlari.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kumanda Kurulumu
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  href="https://tvplus.com.tr/evabonelikbasvurusu"
                >
                  Hemen Başvur
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  href="https://web.tvplus.com.tr/yeni-kayit?access="
                >
                  Üye Ol
                </a>
              </li>
            </ul>
            <ul className="mb-md-3 mt-md-2 footer-ul navbar-nav-ul">
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  href="https://tvplus.com.tr/kurumsal/kunye"
                >
                  Künye
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a className="footer-a" href="https://tvplus.com.tr/destek/sss">
                  Destek
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a className="footer-a" href="https://tvplus.com.tr/promo">
                  Kod Aktifle
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  href="https://tvplusweb.tcellcdn.net/belge/stbguidevestel.PDF"
                >
                  IPTV EV Kullanım Klavuzu
                </a>
              </li>
            </ul>
            <ul className="pt-md-4 footer-ul navbar-nav-ul">
              <li className="navbar-nav-ul-li">
                <a className="footer-a" href="https://tvplus.com.tr/smarttv">
                  Smart TV
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  target="_blank"
                  href="https://apps.apple.com/tr/app/tv/id835880015?l=tr"
                >
                  iPhone
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  target="_blank"
                  href="https://apps.apple.com/tr/app/tv/id835880015?l=tr#?platform=ipad"
                >
                  iPad
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  target="_blank"
                  href="https://apps.apple.com/tr/app/tv/id835880015?l=tr#?platform=appleTV"
                >
                  Apple TV
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.turkcell.ott&amp;hl=tr"
                >
                  Android
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.turkcell.ott&amp;hl=tr"
                >
                  Android TV
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  target="_blank"
                  href="https://itunes.apple.com/tr/app/tv/id835880015?l=tr&amp;mt=8"
                >
                  <img
                    src="img/ios_icon.png"
                    className="my-auto"
                    width="20px"
                  />{" "}
                  Apple <span className="hidden-in-mobile">Store</span>
                </a>
              </li>
              <li className="navbar-nav-ul-li">
                <a
                  className="footer-a"
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.turkcell.ott&amp;hl=tr"
                >
                  <img
                    src="img/play_icons.png"
                    className="my-auto"
                    width="20px"
                  />{" "}
                  Google <span className="hidden-in-mobile">Play</span>
                </a>
              </li>
            </ul>
        </div>
        <div>
        <div>
              <div className="text-center pb-2">
                <a href="tel:08508080808">
                  <img src="img/cagri_merkezi.png" width="160px" />
                </a>
              </div>
              <h5 className="footer-icon-text text-center"> BİZİ TAKİP EDİN!</h5>
              <div className="text-center">
                <a
                  target="_blank"
                  href="https://www.facebook.com/TurkcellTV"
                  className="btn bg-transparent px-1 py-0"
                >
                  <img src="img/facebook_icon.png" width="30px" />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/TVPlusHerYerde"
                  className="btn bg-transparent px-1 py-0"
                >
                  <img src="img/twitter_icon.png" width="30px" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/tvplus/?hl=tr"
                  className="btn bg-transparent px-1 py-0"
                >
                  <img src="img/instagram_icon.png" width="30px" />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCOmgiJ1qvvl4x5hV3myKhMQ"
                  className="btn bg-transparent px-1 py-0"
                >
                  <img src="img/youtube_icon.png" width="30px" />
                </a>
              </div>
            </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
