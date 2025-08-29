        // Images for the gallery organized by category
        const images = {
            nature: [
                { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Mountain Landscape' },
                { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Forest Path' },
                { src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Flower Field' },
                { src: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Northern Lights' },
                { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Snowy Mountain' },
                { src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Rocky Beach' },
                { src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Green Valley' },
                { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Autumn Forest' },
                { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Misty Forest' },
                { src: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Waterfall' }
            ],
            cars: [
                { src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Sports Car' },
                { src: 'https://images.unsplash.com/photo-1544896478-d5b709d413c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Vintage Car' },
                { src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Red Sports Car' },
                { src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Luxury Car' },
                { src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'White Sports Car' },
                { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Black Luxury Car' },
                { src: 'https://images.unsplash.com/photo-1489008777659-ad1fc8e07097?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Classic Car' },
                { src: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Modern SUV' },
                { src: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Blue Car' },
                { src: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Red Car' }
            ],
            animals: [
                { src: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Lion' },
                { src: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Deer' },
                { src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Panda' },
                { src: 'https://plus.unsplash.com/premium_photo-1661963423747-686b37c59aea?q=80&w=1004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Fox' },
                { src: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Elephant' },
                { src: 'https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Giraffe' },
                { src: 'https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Tiger' },
                { src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Koala' },
                { src: 'https://images.unsplash.com/photo-1607350999170-b893fef057ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Wolf' },
                { src: 'https://plus.unsplash.com/premium_photo-1664304362237-8040f0ecac98?q=80&w=682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Cheetah' }
            ],
            lifestyle: [
                { src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Reading Book' },
                { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Mountain Climbing' },
                { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Sunset Viewing' },
                { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Dining' },
                { src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Cooking' },
                { src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Shopping' },
                { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Working Out' },
                { src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Coffee Break' },
                { src: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Yoga' },
                { src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Meditation' }
            ],
            fashion: [
                { src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Fashion Model' },
                { src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Street Style' },
                { src: 'https://images.unsplash.com/photo-1525299374597-911581e1bdef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Fashion Accessories' },
                { src: 'https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Summer Fashion' },
                { src: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Elegant Dress' },
                { src: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Winter Fashion' },
                { src: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Casual Outfit' },
                { src: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Fashion Photography' },
                { src: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', alt: 'Shoes Collection' },
                { src: 'https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Jewellery' }
            ]
        };

        // Initialize the gallery
        const galleryGrid = document.getElementById('galleryGrid');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxCaption = document.getElementById('lightboxCaption');
        const imageCounter = document.getElementById('imageCounter');
        const lightboxLoading = document.getElementById('lightboxLoading');
        const btnPrev = document.getElementById('btnPrev');
        const btnNext = document.getElementById('btnNext');
        const btnClose = document.getElementById('btnClose');
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        let currentImageIndex = 0;
        let currentFilter = 'all';
        let filteredImages = [];
        let observer;

        // Create a flat array of all images with category info
        function getAllImages() {
            const allImages = [];
            for (const category in images) {
                images[category].forEach(img => {
                    allImages.push({...img, category});
                });
            }
            return allImages;
        }

        // Create gallery items based on filter
        function createGalleryItems(filter = 'all') {
            galleryGrid.innerHTML = '';
            
            if (filter === 'all') {
                filteredImages = getAllImages();
            } else {
                filteredImages = images[filter].map(img => ({...img, category: filter}));
            }
            
            filteredImages.forEach((image, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = `gallery-item ${image.category}`;
                
                // Create loading spinner
                const loadingSpinner = document.createElement('div');
                loadingSpinner.className = 'loading';
                
                // Create image with low-quality placeholder first
                const imgElement = document.createElement('img');
                imgElement.dataset.src = image.src;
                imgElement.alt = image.alt;
                imgElement.dataset.index = index;
                
                galleryItem.appendChild(loadingSpinner);
                galleryItem.appendChild(imgElement);
                galleryGrid.appendChild(galleryItem);
            });

            // Initialize lazy loading
            initLazyLoading();
            
            // Add event listeners to the new gallery items
            document.querySelectorAll('.gallery-item img').forEach(img => {
                img.addEventListener('click', (e) => {
                    openLightbox(e.target.dataset.index);
                });
            });
        }

        // Initialize lazy loading with Intersection Observer
        function initLazyLoading() {
            if (observer) {
                observer.disconnect();
            }
            
            const lazyImages = document.querySelectorAll('.gallery-item img');
            
            observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        
                        img.onload = () => {
                            img.style.opacity = 1;
                            img.previousElementSibling.style.display = 'none';
                        };
                        
                        observer.unobserve(img);
                    }
                });
            }, { rootMargin: '0px 0px 100px 0px' });
            
            lazyImages.forEach(img => {
                observer.observe(img);
            });
        }

        // Open lightbox
        function openLightbox(index) {
            currentImageIndex = parseInt(index);
            updateLightboxImage();
            lightbox.style.display = 'flex';
            setTimeout(() => {
                lightbox.classList.add('active');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        // Update lightbox image and caption
        function updateLightboxImage() {
            const image = filteredImages[currentImageIndex];
            
            // Show loading indicator
            lightboxLoading.style.display = 'block';
            lightboxImg.style.opacity = 0;
            
            // Preload image for lightbox
            const preloadImg = new Image();
            preloadImg.src = image.src.replace('500', '1000'); // Load higher resolution for lightbox
            preloadImg.onload = () => {
                lightboxImg.src = preloadImg.src;
                lightboxCaption.textContent = image.alt;
                imageCounter.textContent = `${currentImageIndex + 1} / ${filteredImages.length}`;
                lightboxImg.style.opacity = 1;
                lightboxLoading.style.display = 'none';
            };
        }

        // Navigate to next image
        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
            updateLightboxImage();
        }

        // Navigate to previous image
        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
            updateLightboxImage();
        }

        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }

        // Initialize the gallery
        createGalleryItems();

        // Event listeners for filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter gallery
                currentFilter = button.dataset.filter;
                createGalleryItems(currentFilter);
            });
        });

        // Event listeners for navigation buttons
        btnPrev.addEventListener('click', prevImage);
        btnNext.addEventListener('click', nextImage);
        btnClose.addEventListener('click', closeLightbox);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
                if (e.key === 'Escape') closeLightbox();
            }
        });

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });