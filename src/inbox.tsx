import React from 'react';
import { Trans, Plural } from '@lingui/macro';
import { Trans as TransComponent, useLingui } from '@lingui/react';

export default function Inbox() {
  const messages = [{}, {}];
  const messagesCount = messages.length;
  const lastLogin = new Date();
  const { i18n } = useLingui();

  const markAsRead = () => {
    // eslint-disable-next-line no-alert
    alert('Marked as read.');
  };

  const name = 'Andrey';

  return (
    <div>
      {/** Trans macro do the same as Trans Component */}
      <h1>
        <TransComponent id="Hello {name}" values={{ name }} />
      </h1>
      <h1>
        <Trans>Message Inbox</Trans>
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
    </div>
  );
}
