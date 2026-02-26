const links = [
  { name: '小蜜蜂老师（STM/CC2530）', url: 'https://www.cnblogs.com/ALittleBee/tag/CC2530/' },
  { name: '网上的笔记（STM/CC2530）', url: 'https://flowus.cn/share/73b45c12-c8ea-4759-bafd-014ea7c47b4e' },
  { name: '无痕（windows维护）', url: 'https://www.cnblogs.com/wuhen520' },
  { name: 'AlertDialog', url: 'https://space.bilibili.com/294140672' },
];

const linkGrid = document.getElementById('linkGrid');
const searchInput = document.getElementById('searchInput');

function renderLinks(filteredLinks) {
  linkGrid.innerHTML = '';
  if (filteredLinks.length === 0) {
    const noResult = document.createElement('p');
    noResult.className = 'no-result';
    noResult.textContent = '未找到匹配的链接。';
    linkGrid.appendChild(noResult);
    return;
  }

  filteredLinks.forEach((link) => {
    const card = document.createElement('div');
    card.className = 'link-card';
    card.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
    linkGrid.appendChild(card);
  });
}

// 初始渲染
renderLinks(links);

// 搜索功能
searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  const filtered = links.filter(
    (link) => link.name.toLowerCase().includes(term) || link.url.toLowerCase().includes(term)
  );
  renderLinks(filtered);
});

// 返回顶部按钮显示逻辑
const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// 平滑回到顶部
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
