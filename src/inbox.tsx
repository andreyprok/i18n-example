import React from 'react';

export default function Inbox() {
  const messages = [{}, {}];
  const messagesCount = messages.length;
  const lastLogin = new Date();

  const markAsRead = () => {
    alert('Marked as read.');
  };

  return (
    <div>
      <h1>Message Inbox</h1>

      <p>
        See all <a href="/unread">unread messages</a>
        {' or '}
        <button type="button" onClick={markAsRead}>
          mark them
        </button>{' '}
        as read.
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
