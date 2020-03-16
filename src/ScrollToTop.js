import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * ScrollTop
 * @link https://reacttraining.com/react-router/web/guides/scroll-restoration
 */
function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <Fragment>{children}</Fragment>;
}
ScrollToTop.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  children: PropTypes.object
};

export default withRouter(ScrollToTop);
