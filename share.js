const supported = ('share' in navigator);
const butShare = document.getElementById('butShare');
const divResult = document.getElementById('divResult');

if (supported) {
  const divNotSupported = document.getElementById('notSupported');
  divNotSupported.classList.toggle('hidden', true);
  butShare.removeAttribute('disabled');
  butShare.addEventListener('click', (e) => {
    console.log('👍', 'butShare-clicked', e);
    e.preventDefault();
    const shareOpts = {
      title: 'Melvin Carvalho Home Page',
      text: 'Check out the home page of Melvin Carvalho',
      url: 'https://melvincarvalho.com/',
    };
    navigator.share(shareOpts)
        .then((e) => {
          const msg = 'navigator.share succeeded.';
          divResult.textContent = msg;
          console.log('👍', msg, e);
        })
        .catch((err) => {
          const msg = 'navigator.share failed';
          divResult.textContent = `${msg}\n${JSON.stringify(err)}`;
          console.error('👎', msg, err);
        });
  });
}