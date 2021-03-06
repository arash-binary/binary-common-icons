import React from 'react';
import Icon from './../../icon.jsx';

const SVGFRXBROUSD = () => (
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#5798B4" d="M9 6h14v20H9z"/><g fill-rule="nonzero"><path d="M18.99 17.15c0 1.583-1.346 2.85-2.99 2.85-1.644 0-2.99-1.267-2.99-2.85C13.01 15.567 16 12 16 12s2.99 3.583 2.99 5.15z" fill="#FFC521"/><path d="M16 19.25c-1.207 0-2.203-.933-2.203-2.1 0-.133.122-.25.262-.25s.262.117.262.25c0 .883.752 1.6 1.679 1.6.14 0 .262.117.262.25s-.122.25-.262.25z" fill="#FFF"/></g><rect fill="#3B7B96" x="8" y="6" width="16" height="1" rx=".5"/><rect fill="#3B7B96" x="8" y="8" width="16" height="1" rx=".5"/><rect fill="#3B7B96" x="8" y="23" width="16" height="1" rx=".5"/><rect fill="#3B7B96" x="8" y="25" width="16" height="1" rx=".5"/></g></svg>
);

const IconFRXBROUSD = () => <Icon icon={SVGFRXBROUSD} />

IconFRXBROUSD.displayName = 'IconFRXBROUSD';
SVGFRXBROUSD.displayName = 'SVGFRXBROUSD';

export { IconFRXBROUSD, SVGFRXBROUSD }