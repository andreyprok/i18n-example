import React from 'react';
import { Trans } from '@lingui/macro';
import { Trans as TransComponent } from '@lingui/react';

export default function Inbox() {
  const messages = [{}, {}];
  const messagesCount = messages.length;
  const lastLogin = new Date();

  const markAsRead = () => {
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
        {messagesCount === 1
          ? `There's ${messagesCount} message in your inbox.`
          : `There are ${messagesCount} messages in your inbox.`}
      </p>

      <footer>Last login on {lastLogin.toLocaleDateString()}.</footer>
    </div>
  );
}
