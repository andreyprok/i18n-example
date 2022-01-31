import React from 'react';
import { Trans, Plural, t, defineMessage } from '@lingui/macro';
import { useI18nService } from './i18n-service/i18n-service-context';

// Lazy translations
const favoriteColors = [
  defineMessage({ message: 'Red' }),
  defineMessage({ message: 'Orange' }),
  defineMessage({ message: 'Yellow' }),
  defineMessage({ message: 'Green' }),
];

export default function Inbox() {
  const messages = [{}, {}];
  const messagesCount = messages.length;
  const lastLogin = new Date();
  const { langList, switchLang, i18n } = useI18nService();
  const markAsRead = () => {
    // use t as if you were inside a React component
    // eslint-disable-next-line no-alert
    alert(t`Mails are marked as read.`);
    // i18n.activate('ru');
  };

  const getTranslatedColorNames = () => {
    //  a string-only translation (of lazy translations)
    return favoriteColors.map((color) => i18n._(color));
  };

  const name = 'Andrey';

  return (
    <div>
      <Trans>My Message Inbox Thre</Trans>
      {getTranslatedColorNames()}
      <h1>
        <Trans>My Message Inbox Two</Trans>
        <Trans>My Message Inbox</Trans>
        <Trans>My super inbox</Trans>
        <Trans>My super super inbox</Trans>
      </h1>
      <p>
        {/**  it's allowed rich-text formatting inside translations. */}
        <Trans>
          See all <a href="/unread">unread messages</a>
          {' or '}
          <button type="button" onClick={markAsRead}>
            mark them
          </button>{' '}
          as read.
        </Trans>
      </p>
      <p>
        <Plural
          value={messagesCount}
          _0="There are no messages"
          one={`There's # message in your inbox, ${name}`}
          other={
            <Trans>
              There are <strong>#</strong> messages in your inbox, {name}
            </Trans>
          }
        />
      </p>
      <footer>Last login on {i18n.date(lastLogin)}.</footer>
      <ul>
        {favoriteColors.map((color) => (
          <li key={color.id}>
            <Trans id={color.id} />
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        {Object.keys(langList()).map((key) => (
          <li key={key}>
            <button type="button" onClick={() => switchLang(key)}>
              {langList()[key]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// t’s often convenient to pass messages around as component props
function FancyButton({ label }: { label: string | JSX.Element }) {
  return <button type="button">{label}</button>;
}

export function LoginLogoutButtons() {
  return (
    <div>
      <FancyButton label={<Trans>Log in</Trans>} />
      <FancyButton label={<Trans>Log out</Trans>} />
    </div>
  );
}

// If you need the prop to be displayed as a string-only translation, you can pass a message tagged with the t macro
function ImageWithCaption({ caption }: { caption: string }) {
  return <img src="..." alt={caption} />;
}

export function HappySad() {
  return (
    <div>
      <ImageWithCaption caption={t`I'm so happy!`} />
      <ImageWithCaption caption={t`I'm so sad.`} />
    </div>
  );
}

// Picking a message based on a variable
const STATUS_OPEN = 1;
const STATUS_CLOSED = 2;
const STATUS_CANCELLED = 4;
const STATUS_COMPLETED = 8;

const statusMessages = {
  [STATUS_OPEN]: defineMessage({ message: 'Open' }),
  [STATUS_CLOSED]: defineMessage({ message: 'Closed' }),
  [STATUS_CANCELLED]: defineMessage({ message: 'Cancelled' }),
  [STATUS_COMPLETED]: defineMessage({ message: 'Completed' }),
};

export function StatusDisplay({
  statusCode,
}: {
  statusCode:
    | typeof STATUS_OPEN
    | typeof STATUS_CLOSED
    | typeof STATUS_CANCELLED
    | typeof STATUS_COMPLETED;
}) {
  return (
    <div>
      <Trans id={statusMessages[statusCode].id} />
    </div>
  );
}
