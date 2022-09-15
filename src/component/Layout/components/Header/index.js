import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PoperWrapper } from "~/component/Popper";

import Tippy from "@tippyjs/react/headless";
import Button from "~/component/Button";
import "tippy.js/dist/tippy.css"; // optional

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AccountItem from "~/component/AccountItem";
const cx = classNames.bind(styles);

console.log(images.logo);
function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  });

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>
        <Tippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PoperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PoperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search account and videos" spellCheck={false} />
            <button>
              <FontAwesomeIcon className={cx("clear")} icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          <Button text>Upload</Button>
          <Button primary>
            {/* rightIcon={<FontAwesomeIcon icon={faSignIn} /> */}
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
