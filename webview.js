module.exports = (Ferdi) => {
  function getMessages() {
    Ferdi.setBadge(document.querySelectorAll('mws-conversation-list-item div.text-content.unread').length);
  }

  // check for new messages every second and update Ferdi badge
  Ferdi.loop(getMessages);
};