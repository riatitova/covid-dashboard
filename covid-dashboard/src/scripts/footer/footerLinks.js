import createDOMElement from '../createDOMElement';

export default class FooterLinks {
  constructor(parent) {
    this.parent = parent || null;
    this.data = {
      elementName: 'ul',
      classNames: 'footer__links',
      children: null,
      parent: this.parent,
    };

    this.renderFooterLinks();
  }

  renderFooterLinks() {
    const usernames = ['riatitova', 'aleno4ka0', 'Tasty63'];

    this.footerLinks = createDOMElement(this.data);
    usernames.forEach((username) => this.renderFooterItem(username));
  }

  renderFooterItem(username) {
    const itemData = {
      elementName: 'li',
      classNames: 'footer__item',
      children: null,
      parent: this.footerLinks,
    };

    this.footerItemElement = createDOMElement(itemData);
    this.renderFooterLink(username);
  }

  renderFooterLink(username) {
    const url = `https://github.com//${username}`;
    const linkData = {
      elementName: 'a',
      classNames: 'footer__link',
      children: username,
      parent: this.footerItemElement,
    };

    this.footerLinkElement = createDOMElement(linkData);
    this.footerLinkElement.href = url;
  }
}
