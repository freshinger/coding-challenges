abstract class Txt {
  protected text: string;
  constructor(text: string) {
    this.text = text;
  }
  getText() {
    return this.text;
  }
}

class PlainText extends Txt {
  constructor(text: string) {
    super(text);
  }
  getText(): string {
    return this.text;
  }
}

class BoldTextDecorator extends Txt {
  constructor(toDecorate: Txt) {
    super(toDecorate.getText());
  }

  getText(): string {
    return `<b>${this.text}</b>`;
  }
}
class ItalicTextDecorator extends Txt {
  constructor(toDecorate: Txt) {
    super(toDecorate.getText());
  }

  getText(): string {
    return `<i>${this.text}</i>`;
  }
}
class UnderlineTextDecorator extends Txt {
  constructor(toDecorate: Txt) {
    super(toDecorate.getText());
  }

  getText(): string {
    return `<u>${this.text}</u>`;
  }
}
const text = new BoldTextDecorator(new PlainText("Hello"));
console.log(text.getText()); // <b>Hello</b>
const nested = new BoldTextDecorator(
  new ItalicTextDecorator(new UnderlineTextDecorator(new PlainText("nested")))
);
console.log(nested.getText());
