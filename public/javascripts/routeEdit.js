const editButton = document.getElementById('route-edit-button');

if (editButton) {
  const splitURL = document.URL.split('/');
  const routeId = splitURL[splitURL.length - 1];
  const postInfo = document.querySelector(`#route-post-${routeId}`);
  const formInfo = document.querySelector(`#route-edit-form-${routeId}`);

  editButton.addEventListener('click', (e) => {
    if (postInfo.classList.contains('hidden')) {
      postInfo.classList.remove('hidden');
      formInfo.classList.add('hidden');
    }
    else {
      postInfo.classList.add('hidden');
      formInfo.classList.remove('hidden');
    }
  });
  const cancelButton = document.querySelector(`#route-edit-cancel-${routeId}`);
  cancelButton.addEventListener('click', (e) => {
    if (postInfo.classList.contains('hidden')) {
      postInfo.classList.remove('hidden');
      formInfo.classList.add('hidden');
    }
    else {
      postInfo.classList.add('hidden');
      formInfo.classList.remove('hidden');
    }
  });
  const submitButton = document.querySelector(`#route-edit-submit-${routeId}`);
  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const name = document.querySelector(`#route-${routeId}-edit-name`).value;
    const difficulty = document.querySelector(`#route-${routeId}-edit-difficulty`).value;
    const height = document.querySelector(`#route-${routeId}-edit-height`).value;
    const type = document.querySelector(`#route-${routeId}-edit-type`).value;
    const protection = document.querySelector(`#route-${routeId}-edit-protection`).value;
    const description = document.querySelector(`#route-${routeId}-edit-description`).value;

    const res = await fetch(`/routes/${routeId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          name,
          difficulty,
          height,
          type,
          protection,
          description
    })
  });
}
