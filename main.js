// Start header
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// End header

const banner = document.getElementById("register-to-try");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    banner.classList.remove("hide");
  } else {
    banner.classList.add("hide");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdownTrigger = document.querySelector("[uk-dropdown]");
  const body = document.body;

  dropdownTrigger.addEventListener("beforeshow", () => {
    body.classList.add("no-scroll");
  });

  dropdownTrigger.addEventListener("hide", () => {
    body.classList.remove("no-scroll");
  });
});

const dropdownHeader = document.getElementById("dropdown-header");

const handleNavigate = () => {
  UIkit.dropdown(dropdownHeader).hide(0);
};

// Start handling cards and images
const handleCardClick = (cardSelector, imgSelector) => {
  const cardDescriptions = document.querySelectorAll(cardSelector);
  const imageElement = document.querySelector(imgSelector);

  cardDescriptions.forEach((desc) => {
    desc.addEventListener("click", () => {
      // Remove "active" class from all cards in this group
      cardDescriptions.forEach((item) => item.classList.remove("active"));
      // Add "active" class to the clicked card
      desc.classList.add("active");

      // Update the image src
      const newImageSrc = desc.getAttribute("data-img");
      if (newImageSrc) {
        imageElement.setAttribute("src", newImageSrc);
      }
    });
  });
};

handleCardClick(".activity-card-desc", ".activity-img");

const handleCardClick1 = (cardSelector, videoClass, sourceClass) => {
  const cardDescriptions = document.querySelectorAll(cardSelector);
  const videoElement = document.querySelector(`.${videoClass}`);
  const sourceElement = videoElement.querySelector(`.${sourceClass}`);

  cardDescriptions.forEach((desc) => {
    desc.addEventListener("click", () => {
      // Xóa "active" khỏi tất cả mô tả
      cardDescriptions.forEach((item) => item.classList.remove("active"));
      desc.classList.add("active");

      // Cập nhật video source
      const newVideoSrc = desc.getAttribute("data-img");
      if (newVideoSrc && sourceElement) {
        sourceElement.setAttribute("src", newVideoSrc);
        videoElement.load(); // Nạp video mới
        videoElement.play(); // Phát video
      }
    });
  });
};

handleCardClick1(
  ".platform-card-desc",
  "platform-video",
  "platform-video-source"
);

// handleCardClick(".platform-card-desc", ".platform-img");
// End handling cards and images
