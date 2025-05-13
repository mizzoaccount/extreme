// app/page.tsx
/*import React from 'react';
import Head from 'next/head';

const KingdomConnect = () => {
  // Dummy data for demonstration
  const featuredChurches = [
    {
      id: 1,
      name: 'Grace Community Church',
      location: 'Nairobi, Kenya',
      followers: '12.5k',
      image: '/church1.jpg',
    },
    {
      id: 2,
      name: 'Redeemed Gospel Church',
      location: 'Lagos, Nigeria',
      followers: '8.2k',
      image: '/church2.jpg',
    },
    {
      id: 3,
      name: 'Zion Prayer Ministry',
      location: 'Johannesburg, South Africa',
      followers: '15.7k',
      image: '/church3.jpg',
    },
  ];

  const featuredTestimonies = [
    {
      id: 1,
      user: 'Sarah M.',
      content: 'Through Kingdom Connect, I found a prayer group that supported me during my illness. God is faithful!',
      date: '2 days ago',
    },
    {
      id: 2,
      user: 'David K.',
      content: 'The daily devotionals keep me grounded in the Word. The platform is a blessing to my spiritual life.',
      date: '1 week ago',
    },
    {
      id: 3,
      user: 'Esther W.',
      content: 'I was able to stream my home church services while abroad. This platform connects the body of Christ!',
      date: '3 days ago',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Global Prayer Conference',
      date: 'May 15, 2024',
      time: '10:00 AM EAT',
      organizer: 'Pentecostal Fellowship',
    },
    {
      id: 2,
      title: 'Worship Night Live',
      date: 'May 20, 2024',
      time: '6:00 PM WAT',
      organizer: 'Heaven\'s Sound Music',
    },
    {
      id: 3,
      title: 'Youth Empowerment Summit',
      date: 'May 25, 2024',
      time: '9:00 AM SAST',
      organizer: 'NextGen Ministries',
    },
  ];

  const marketplaceItems = [
    {
      id: 1,
      name: 'Anointed Worship Album',
      price: '$9.99',
      seller: 'Heavenly Sounds',
      image: '/product1.jpg',
    },
    {
      id: 2,
      name: 'Prayer Journal',
      price: '$14.99',
      seller: 'Faithful Creations',
      image: '/product2.jpg',
    },
    {
      id: 3,
      name: 'Christian T-Shirt',
      price: '$19.99',
      seller: 'Kingdom Wear',
      image: '/product3.jpg',
    },
  ];

  const bibleVersions = ['KJV', 'NIV', 'ESV', 'AMP', 'NASB', 'MSG'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <Head>
        <title>Kingdom Connect | Digital Ministry Platform</title>
        <meta name="description" content="A unified digital space for churches and believers worldwide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation *
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="flex items-center">
                  <span className="text-purple-600 text-2xl font-bold">✝</span>
                  <span className="ml-2 text-xl font-bold text-purple-800">Kingdom Connect</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
              <a href="#features" className="text-purple-900 hover:text-purple-600 px-3 py-2 text-sm font-medium">Features</a>
              <a href="#churches" className="text-purple-900 hover:text-purple-600 px-3 py-2 text-sm font-medium">Churches</a>
              <a href="#testimonies" className="text-purple-900 hover:text-purple-600 px-3 py-2 text-sm font-medium">Testimonies</a>
              <a href="#marketplace" className="text-purple-900 hover:text-purple-600 px-3 py-2 text-sm font-medium">Marketplace</a>
            </div>
            <div className="flex items-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section *
      <div className="relative bg-purple-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-purple-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Uniting the Body of Christ</span>
                  <span className="block text-purple-300">in Digital Fellowship</span>
                </h1>
                <p className="mt-3 text-base text-purple-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  A revolutionary platform blending social media, video streaming, and spiritual tools to connect churches and believers worldwide.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 md:py-4 md:text-lg md:px-10">
                      Get Started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
                      Watch Demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/hero-image.jpg" alt="People worshipping" />
        </div>
      </div>

      <div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
      Experience Spiritual Connection Like Never Before
    </h2>

    {/* Home Feed *
    <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-purple-100 mr-4">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Home Feed</h3>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          A spiritually uplifting feed with content from churches and believers you follow - like Instagram but for the Kingdom.
        </p>
        <div className="border rounded-xl overflow-hidden shadow-lg max-w-md">
          <div className="bg-gray-50 p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-purple-200"></div>
              <div>
                <p className="font-medium">Grace Community</p>
                <p className="text-xs text-gray-500">2 hrs ago</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <p className="mb-3">"For I know the plans I have for you declares the Lord..." - Jeremiah 29:11</p>
            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Devotional Image</span>
            </div>
            <div className="flex justify-between mt-3 text-gray-500">
              <button className="flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                42
              </button>
              <button className="flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                8
              </button>
              <button className="flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="relative h-96">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-purple-100 rounded-2xl"></div>
          <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-white border border-gray-200 rounded-2xl shadow-lg p-4">
            <div className="flex space-x-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-purple-200"></div>
              <div className="h-8 w-8 rounded-full bg-blue-200"></div>
              <div className="h-8 w-8 rounded-full bg-yellow-200"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square bg-gray-100 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Video Platform *
    <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
      <div className="order-1 md:order-2">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-blue-100 mr-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Video Platform</h3>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          From 30-second worship clips to full sermons, share and discover video content that edifies.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Short Reels (30-90 second clips)
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Full-length sermons and conferences
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Live broadcast capabilities
          </li>
        </ul>
      </div>
      <div className="order-2 md:order-1">
        <div className="relative h-96">
          <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-blue-100 rounded-2xl"></div>
          <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 h-6 flex items-center px-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center mb-3">
                <div className="w-16 h-16 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Sunday Service</p>
                  <p className="text-sm text-gray-500">Redeemed Gospel Church</p>
                </div>
                <div className="text-sm text-gray-500">45:22</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bible & Devotionals *
    <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-yellow-100 mr-4">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 19.477 5.754 19 7.5 19s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 19.477 18.247 19 16.5 19c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Bible & Devotionals</h3>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          Access multiple Bible versions and receive daily devotionals with push notifications.
        </p>
        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-6 max-w-md">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="font-bold text-gray-900">Today's Devotional</h4>
              <p className="text-sm text-yellow-700">May 15, 2024</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              New
            </span>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 italic mb-2">"The Lord is my shepherd; I shall not want."</p>
            <p className="text-sm text-gray-600">- Psalm 23:1 (KJV)</p>
          </div>
          <p className="text-gray-700 mb-4">
            In seasons of lack, remember that with God as your shepherd, all your needs are met according to His riches in glory.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <button className="p-1 rounded-full bg-yellow-100 text-yellow-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
              <button className="p-1 rounded-full bg-yellow-100 text-yellow-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
            <div className="text-xs text-gray-500">From: Daily Manna Devotional</div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-w-md mx-auto">
          <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h4 className="font-medium">Bible Reader</h4>
            <div className="flex items-center space-x-2">
              <select className="bg-gray-700 text-white text-sm rounded px-2 py-1">
                <option>KJV</option>
                <option>NIV</option>
                <option>ESV</option>
                <option>AMP</option>
              </select>
              <button className="p-1 rounded hover:bg-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <h5 className="font-bold text-lg mb-2">John 3:16-17</h5>
            <p className="mb-4">
              <sup>16</sup> For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.
            </p>
            <p>
              <sup>17</sup> For God sent not his Son into the world to condemn the world; but that the world through him might be saved.
            </p>
          </div>
          <div className="bg-gray-50 px-4 py-3 flex justify-between border-t">
            <button className="text-sm text-gray-600 hover:text-gray-900">Previous</button>
            <button className="text-sm text-gray-600 hover:text-gray-900">Next</button>
          </div>
        </div>
      </div>
    </div>

    {/* Chat & Fellowship *
    <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
      <div className="order-1 md:order-2">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-green-100 mr-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Chat & Fellowship</h3>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          Connect one-on-one or in groups for prayer, Bible study, and spiritual encouragement.
        </p>
        <div className="space-y-4 max-w-md">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-green-200 flex items-center justify-center">
                <span className="text-green-700 font-medium">PG</span>
              </div>
              <div>
                <p className="font-medium">Prayer Group</p>
                <p className="text-xs text-gray-500">12 members • Active now</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 mb-2">
              <p className="text-sm text-gray-700">Sarah: Let's pray for brother Michael's healing...</p>
            </div>
            <div className="flex justify-between items-center">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
              <button className="bg-green-600 text-white px-3 py-2 rounded-r-lg text-sm hover:bg-green-700">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="order-2 md:order-1">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-w-md mx-auto">
          <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
            <h4 className="font-medium">Conversations</h4>
            <button className="p-1 rounded-full hover:bg-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              { name: "David M.", message: "Thanks for praying for me!", time: "10:30 AM", unread: true },
              { name: "Bible Study Group", message: "John 3:16 discussion", time: "Yesterday", unread: false },
              { name: "Pastor James", message: "Can we meet tomorrow?", time: "May 12", unread: false },
              { name: "Prayer Warriors", message: "New prayer request added", time: "May 10", unread: false },
            ].map((chat, index) => (
              <div key={index} className="p-3 flex items-center hover:bg-gray-50 cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <span className="text-green-700 font-medium">{chat.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <p className="font-medium text-gray-900 truncate">{chat.name}</p>
                    <p className="text-xs text-gray-500">{chat.time}</p>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{chat.message}</p>
                </div>
                {chat.unread && (
                  <div className="ml-2 w-2 h-2 rounded-full bg-green-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Kingdom Marketplace *
    <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-red-100 mr-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Kingdom Marketplace</h3>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          Support Christian businesses selling books, merch, art, clothing, and faith-based products.
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-md">
          {[
            { name: "Anointed Worship CD", price: "$12.99", category: "Music" },
            { name: "Prayer Journal", price: "$9.99", category: "Books" },
            { name: "Faith T-Shirt", price: "$19.99", category: "Clothing" },
            { name: "Scripture Art Print", price: "$24.99", category: "Art" },
          ].map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow">
              <div className="bg-gray-100 aspect-square rounded-lg mb-2 flex items-center justify-center">
                <span className="text-gray-400 text-xs">{item.category}</span>
              </div>
              <h4 className="font-medium text-sm text-gray-900 truncate">{item.name}</h4>
              <p className="text-sm font-bold text-red-600">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-w-md mx-auto">
          <div className="p-4 border-b">
            <h4 className="font-bold text-lg">Featured Christian Business</h4>
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-16 w-16 rounded-full bg-red-200 flex items-center justify-center">
                <span className="text-red-700 font-medium text-xl">CW</span>
              </div>
              <div>
                <h5 className="font-bold">Christian Wear</h5>
                <p className="text-sm text-gray-500">Faith-inspired clothing & accessories</p>
                <div className="flex space-x-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">(128)</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-100 aspect-square rounded-lg"></div>
              ))}
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700">
              Visit Store
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Secure Giving *
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-1 md:order-2">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-indigo-100 mr-4">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Secure Giving</h3>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          Tithes, offerings, and project-based giving with multiple secure payment options.
        </p>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 max-w-md">
          <h4 className="font-bold text-lg mb-4">Make a Donation</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input 
                  type="text" 
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2" 
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <select className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                    <option>USD</option>
                    <option>KES</option>
                    <option>NGN</option>
                    <option>ZAR</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>Tithe</option>
                <option>Offering</option>
                <option>Building Fund</option>
                <option>Missions</option>
                <option>Other</option>
              </select>
            </div>
            <div className="pt-2">
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700">
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="order-2 md:order-1">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-w-md mx-auto">
          <div className="p-4 border-b bg-gray-800 text-white">
            <h4 className="font-bold">Payment Methods</h4>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-4 gap-3 mb-4">
              <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-center">
                <span className="font-bold text-gray-700 text-sm">M-Pesa</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 flex items-center justify-center">
                <span className="font-bold text-blue-700 text-sm">Visa</span>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3 flex items-center justify-center">
                <span className="font-bold text-yellow-700 text-sm">PayPal</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 flex items-center justify-center">
                <span className="font-bold text-purple-700 text-sm">Stripe</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-gray-100 mr-3">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Instant Processing</p>
                    <p className="text-xs text-gray-500">Most payments complete in seconds</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-gray-100 mr-3">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Bank-Level Security</p>
                    <p className="text-xs text-gray-500">256-bit SSL encryption</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-gray-100 mr-3">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Tax Receipts</p>
                    <p className="text-xs text-gray-500">Automatically generated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Vision Section *
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Our Vision</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              "To digitally unify the body of Christ through fellowship, teaching, worship, and service"
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Building a secure, spirit-led platform for churches and believers worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section *
      <div id="features" className="py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need for Digital Ministry
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 *
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Home Feed</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Like Instagram or Facebook — content from followed churches and believers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 *
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Video Platform</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Short Reels (30–90 sec) and Long Videos (Sermons, Conferences, Live Broadcasts).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 *
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Bible & Devotionals</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        In-app Bible with multiple versions and daily devotionals with push notifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4 *
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Chat & Fellowship</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        One-on-One Chats and Group Chats for prayer groups, Bible study, and church groups.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 5 *
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Kingdom Marketplace</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Christian businesses and creatives can sell books, merch, art, clothing, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 6 *
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Secure Giving</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Tithes, offerings, and project-based giving with multiple payment options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Churches *
      <div id="churches" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Featured Churches</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Connect With Ministries Worldwide
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredChurches.map((church) => (
              <div key={church.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={church.image} alt={church.name} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="text-purple-600 text-xl mr-2">⛪</span>
                      <h3 className="text-xl font-semibold text-gray-900">{church.name}</h3>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{church.location}</p>
                    <p className="mt-3 text-base text-gray-500">
                      Join {church.followers} believers in fellowship and worship.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                        Follow
                      </button>
                    </div>
                    <div className="ml-4">
                      <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonies Section *
      <div id="testimonies" className="py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Testimonies</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Believers Are Saying
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTestimonies.map((testimony) => (
              <div key={testimony.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-100 rounded-full p-3">
                      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{testimony.user}</h3>
                      <p className="text-sm text-gray-500">{testimony.date}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-600">
                      "{testimony.content}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bible & Devotionals Section *
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Bible & Devotionals</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Daily Spiritual Nourishment
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Access multiple Bible versions, daily devotionals, and reading plans to strengthen your faith journey.
              </p>

              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                    Explore Bible
                  </a>
                </div>
                <div className="ml-3 inline-flex">
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200">
                    View Devotionals
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-purple-50 rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Today's Verse</h3>
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 text-base focus:outline-none focus:ring-purple-500 focus:border-purple-500">
                      {bibleVersions.map((version) => (
                        <option key={version}>{version}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-medium text-gray-900">"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."</p>
                  <p className="mt-2 text-sm text-gray-500">John 3:16 (NIV)</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-md font-medium text-gray-900">Today's Devotional</h4>
                  <p className="mt-2 text-gray-600">"The love of God is not just a concept but a reality that transforms lives. As we receive His love, we are empowered to love others in the same measure."</p>
                  <p className="mt-2 text-sm text-gray-500">- Pastor Michael Adeoye</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marketplace Section *
      <div id="marketplace" className="py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Kingdom Marketplace</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Support Christian Businesses
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Discover faith-based products and services from believers around the world.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {marketplaceItems.map((item) => (
              <div key={item.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{item.seller}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
              Browse Marketplace
            </a>
          </div>
        </div>
      </div>

      {/* Events Section *
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Upcoming Events</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Join Live Gatherings
              </p>
              <p className="mt-4 text-lg text-gray-500">
                From prayer conferences to worship nights, find events that will strengthen your faith.
              </p>

              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                    View All Events
                  </a>
                </div>
                <div className="ml-3 inline-flex">
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200">
                    Host Your Event
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-purple-50">
                  <h3 className="text-lg font-medium text-gray-900">Featured Events</h3>
                </div>
                <ul className="divide-y divide-gray-200">
                  {upcomingEvents.map((event) => (
                    <li key={event.id} className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-purple-100 rounded-md p-2">
                          <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                          <p className="text-sm text-gray-500">{event.date} • {event.time}</p>
                          <p className="text-xs text-purple-600 mt-1">Organized by {event.organizer}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 text-right">
                  <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                    View all events <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section *
      <div className="bg-purple-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to join the Kingdom Connect community?</span>
            <span className="block">Sign up today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-purple-200">
            Whether you're a church, ministry, or believer, we have a place for you.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 sm:w-auto"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Footer *
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Platform</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Features</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Pricing</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Churches</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Testimonies</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Help Center</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Tutorials</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Events</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">About</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Our Team</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Careers</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Terms</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Cookie Policy</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Donation Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12 10 15V9l5.194 3z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
              &copy; 2024 Kingdom Connect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KingdomConnect;*/

/*"use client"
import { useState } from 'react';
import { 
  FiHome, FiCompass, FiPlusSquare, FiMusic, FiBell,
  FiUser, FiHeart, FiMessageSquare, FiShare2, FiMoreHorizontal,
  FiClock, FiPlay, FiHeadphones, FiBookmark,
  FiMapPin
} from 'react-icons/fi';
import { IoNewspaperOutline } from 'react-icons/io5';
import { BsThreeDotsVertical, BsDot } from 'react-icons/bs';

const KenyanSocialApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  // Dummy data - Kenyan focused
  const trendingNow = [
    { id: 1, title: "Finance Bill 2024", posts: "45.2K" },
    { id: 2, title: "AFCON Qualifiers", posts: "38.7K" },
    { id: 3, title: "Nairobi Expressway", posts: "22.1K" },
    { id: 4, title: "Mpesa New Features", posts: "18.9K" }
  ];

  const newsStories = [
    {
      id: 1,
      title: "Parliament Approves New Finance Bill Amid Protests",
      summary: "The National Assembly has passed the controversial Finance Bill 2024 with amendments after lengthy debates.",
      source: "Daily Nation",
      time: "1h ago",
      image: "finance-bill.jpg",
      category: "Politics"
    },
    {
      id: 2,
      title: "Kenya Wins Bid to Host 2027 AFCON Tournament",
      summary: "East Africa will host the continental showpiece for the first time in history.",
      source: "Standard Sports",
      time: "3h ago",
      image: "afcon.jpg",
      category: "Sports"
    },
    {
      id: 3,
      title: "New Mpesa Feature Allows Cross-Network Transfers",
      summary: "Safaricom announces interoperability with Airtel and Telkom money platforms starting next month.",
      source: "Techweez",
      time: "5h ago",
      image: "mpesa.jpg",
      category: "Technology"
    }
  ];

  const reels = [
    {
      id: 1,
      user: "NairobiFoodie",
      caption: "Trying the new nyama choma spot in Westlands! 🔥",
      likes: "12.4K",
      comments: "842",
      song: "Original Sound - NairobiFoodie",
      isLiked: false,
      isFollowing: false
    },
    {
      id: 2,
      user: "KOT_Humor",
      caption: "When your nduthi guy says '5 minutes' 😂 #Nairobi",
      likes: "45.7K",
      comments: "3.2K",
      song: "Sauti Sol - Sura Yako",
      isLiked: true,
      isFollowing: true
    },
    {
      id: 3,
      user: "MaasaiAdventures",
      caption: "Sunrise at Amboseli #VisitKenya",
      likes: "8.2K",
      comments: "312",
      song: "Original Sound - MaasaiAdventures",
      isLiked: false,
      isFollowing: false
    }
  ];

  const longVideos = [
    {
      id: 1,
      title: "Full Documentary: The Making of Nairobi",
      creator: "Kenya Archives",
      views: "124K",
      time: "42:15",
      thumbnail: "nairobi-doc.jpg",
      category: "Education"
    },
    {
      id: 2,
      title: "Cooking With Wanjiru: How to Make Githeri Special",
      creator: "Wanjiru Kitchen",
      views: "87K",
      time: "15:30",
      thumbnail: "githeri.jpg",
      category: "Food"
    }
  ];

  const podcasts = [
    {
      id: 1,
      title: "The Messy Truth About Kenyan Politics",
      host: "The Kenya Today Podcast",
      duration: "58:22",
      plays: "12.4K",
      thumbnail: "politics-podcast.jpg",
      category: "Politics"
    },
    {
      id: 2,
      title: "Gengetone Revolution: Music & Culture",
      host: "Sound of Nairobi",
      duration: "36:45",
      plays: "8.7K",
      thumbnail: "gengetone.jpg",
      category: "Music"
    }
  ];

  const followingPosts = [
    {
      id: 1,
      user: {
        name: "Nairobi Gossip",
        handle: "@nairobibuzz",
        avatar: "NG",
        isVerified: true
      },
      content: "Breaking: Popular city club closed by authorities over license issues. More details to follow.",
      image: "club-closed.jpg",
      time: "45m ago",
      likes: "2.4K",
      comments: "342",
      shares: "128"
    },
    {
      id: 2,
      user: {
        name: "Mwangi",
        handle: "@mwangist",
        avatar: "MW",
        isVerified: false
      },
      content: "Traffic on Thika Road is something else today! 2 hours and counting. #NairobiTraffic",
      image: "thika-traffic.jpg",
      time: "2h ago",
      likes: "1.2K",
      comments: "87",
      shares: "32"
    }
  ];

  const toggleLike = (id, type) => {
    if (type === 'reel') {
      setLikedPosts(prev => 
        prev.includes(id) 
          ? prev.filter(postId => postId !== id) 
          : [...prev, id]
      );
    }
    // Can be expanded for other post types
  };

  const toggleSave = (id) => {
    setSavedPosts(prev => 
      prev.includes(id) 
        ? prev.filter(postId => postId !== id) 
        : [...prev, id]
    );
  };

  const renderHomeTab = () => (
    <div className="pb-4">
      {/* Stories *
      <div className="flex space-x-4 px-4 py-3 overflow-x-auto">
        {[1, 2, 3, 4, 5].map((story) => (
          <div key={story} className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-red-500 p-0.5 mb-1">
              <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                <span className="font-bold text-yellow-600">{['NG', 'MW', 'KT', 'FD', 'SP'][story-1]}</span>
              </div>
            </div>
            <span className="text-xs truncate w-16 text-center">{['Nairobi', 'Mwangi', 'Kenya', 'Food', 'Sports'][story-1]}</span>
          </div>
        ))}
      </div>

      {/* Trending in Kenya *
      <div className="bg-gray-100 px-4 py-3 mb-3">
        <h3 className="font-bold text-sm mb-2">TRENDING IN KENYA</h3>
        <div className="space-y-2">
          {trendingNow.map(trend => (
            <div key={trend.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{trend.title}</p>
                <p className="text-xs text-gray-500">{trend.posts} posts</p>
              </div>
              <BsThreeDotsVertical className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* News from official sources *
      <div className="px-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-lg flex items-center">
            <IoNewspaperOutline className="mr-2" /> Kenya News
          </h2>
          <button className="text-blue-600 text-sm">See All</button>
        </div>
        
        <div className="space-y-4">
          {newsStories.map(news => (
            <div key={news.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative">
                <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-500">
                  {news.image.replace('.jpg', '')}
                </div>
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {news.category}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-bold mb-1">{news.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{news.summary}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{news.source} <BsDot className="inline" /> {news.time}</span>
                  <button className="text-blue-600 text-sm font-medium">Read</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Following posts *
      <div className="px-4">
        <h2 className="font-bold text-lg mb-3">From Following</h2>
        {followingPosts.map(post => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden">
            {/* Post header *
            <div className="p-3 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="font-medium text-blue-600">{post.user.avatar}</span>
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="font-medium">{post.user.name}</p>
                    {post.user.isVerified && (
                      <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{post.user.handle} <BsDot className="inline" /> {post.time}</p>
                </div>
              </div>
              <button>
                <BsThreeDotsVertical className="text-gray-400" />
              </button>
            </div>

            {/* Post content *
            <div className="px-3 pb-2">
              <p className="mb-2">{post.content}</p>
            </div>

            {/* Post image *
            <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500">
              {post.image.replace('.jpg', '')}
            </div>

            {/* Post actions *
            <div className="p-3 flex justify-between">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-1">
                  <FiHeart className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <FiMessageSquare className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center space-x-1">
                  <FiShare2 className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">{post.shares}</span>
                </button>
              </div>
              <button onClick={() => toggleSave(post.id)}>
                <FiBookmark className={`w-5 h-5 ${savedPosts.includes(post.id) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReelsTab = () => (
    <div className="h-full bg-black text-white">
      {/* Sample reel - in a real app this would be a scrollable component *
      <div className="relative h-full">
        {/* Reel video placeholder *
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center mb-4 mx-auto">
              <FiPlay className="w-6 h-6 ml-1" />
            </div>
            <p>Tap to play reel</p>
          </div>
        </div>
        
        {/* Reel info overlay *
        <div className="absolute bottom-20 left-4 right-4">
          <div className="mb-4">
            <p className="font-medium">@{reels[0].user}</p>
            <p className="text-sm my-2">{reels[0].caption}</p>
            <div className="flex items-center">
              <FiMusic className="w-4 h-4 mr-2" />
              <p className="text-sm">{reels[0].song}</p>
            </div>
          </div>
        </div>
        
        {/* Right side actions *
        <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-5">
          <div className="flex flex-col items-center">
            <button 
              onClick={() => toggleLike(reels[0].id, 'reel')}
              className="p-2"
            >
              <FiHeart className={`w-7 h-7 ${likedPosts.includes(reels[0].id) ? 'text-red-500 fill-red-500' : 'text-white'}`} />
            </button>
            <span className="text-xs">{reels[0].likes}</span>
          </div>
          
          <div className="flex flex-col items-center">
            <button className="p-2">
              <FiMessageSquare className="w-7 h-7 text-white" />
            </button>
            <span className="text-xs">{reels[0].comments}</span>
          </div>
          
          <div className="flex flex-col items-center">
            <button className="p-2">
              <FiShare2 className="w-7 h-7 text-white" />
            </button>
            <span className="text-xs">Share</span>
          </div>
          
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVideosTab = () => (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-lg">Videos</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
            For You
          </button>
          <button className="px-3 py-1 bg-gray-100 rounded-full text-sm">
            Following
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {longVideos.map(video => (
          <div key={video.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative">
              <div className="bg-gray-200 aspect-video flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
                  <FiPlay className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1.5 py-1 rounded">
                {video.time}
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium mb-1">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.creator} • {video.views} views</p>
              <div className="flex mt-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{video.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPodcastsTab = () => (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-lg flex items-center">
          <FiHeadphones className="mr-2" /> Podcasts
        </h2>
        <button className="text-blue-600 text-sm">See All</button>
      </div>
      
      <div className="space-y-4">
        {podcasts.map(podcast => (
          <div key={podcast.id} className="bg-white rounded-xl shadow-sm p-3 flex">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-500 mr-3">
              {podcast.thumbnail.replace('.jpg', '')}
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-1">{podcast.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{podcast.host}</p>
              <div className="flex items-center text-xs text-gray-500">
                <span>{podcast.duration}</span>
                <BsDot className="mx-1" />
                <span>{podcast.plays} plays</span>
                <BsDot className="mx-1" />
                <span className="text-blue-600">{podcast.category}</span>
              </div>
            </div>
            <button className="self-center p-2">
              <FiPlay className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfileTab = () => (
    <div className="p-4">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-600">YP</span>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-xl">Your Profile</h2>
          <p className="text-gray-600">@yourprofile</p>
        </div>
      </div>
      
      <div className="flex justify-around mb-6">
        <div className="flex flex-col items-center">
          <span className="font-bold">1,234</span>
          <span className="text-sm text-gray-600">Posts</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">5.6K</span>
          <span className="text-sm text-gray-600">Followers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">342</span>
          <span className="text-sm text-gray-600">Following</span>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-bold mb-2">Saved Items</h3>
        <div className="grid grid-cols-3 gap-1">
          {[1, 2, 3, 4, 5, 6].map(item => (
            <div key={item} className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500">
              {['News', 'Reel', 'Post', 'Video', 'News', 'Podcast'][item-1]}
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-3">
        <button className="w-full text-left flex items-center p-3 bg-gray-100 rounded-lg">
          <FiUser className="w-5 h-5 mr-3" />
          <span>Edit Profile</span>
        </button>
        <button className="w-full text-left flex items-center p-3 bg-gray-100 rounded-lg">
          <FiBookmark className="w-5 h-5 mr-3" />
          <span>Saved Content</span>
        </button>
        <button className="w-full text-left flex items-center p-3 bg-gray-100 rounded-lg">
          <FiBell className="w-5 h-5 mr-3" />
          <span>Notifications</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative max-w-md mx-auto h-[800px] bg-gray-50 overflow-hidden border border-gray-200 rounded-2xl shadow-xl flex flex-col">
      {/* Header *
      <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-blue-600">BomaSocial</h1>
        <div className="flex items-center space-x-3">
          <button className="p-1">
            <FiBell className="w-5 h-5" />
          </button>
          <button className="p-1">
            <FiMessageSquare className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content *
      <main className="flex-1 overflow-y-auto pb-16">
        {activeTab === 'home' && renderHomeTab()}
        {activeTab === 'reels' && renderReelsTab()}
        {activeTab === 'videos' && renderVideosTab()}
        {activeTab === 'podcasts' && renderPodcastsTab()}
        {activeTab === 'profile' && renderProfileTab()}
      </main>

      {/* Bottom Navigation *
      <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around">
        <button 
          onClick={() => setActiveTab('home')} 
          className={`p-3 flex flex-col items-center ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <FiHome className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button 
          onClick={() => setActiveTab('reels')} 
          className={`p-3 flex flex-col items-center ${activeTab === 'reels' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <FiCompass className="w-6 h-6" />
          <span className="text-xs mt-1">Reels</span>
        </button>
        <button 
          onClick={() => setShowCreatePost(true)}
          className="p-3 flex flex-col items-center text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full -mt-6 w-12 h-12 justify-center shadow-lg"
        >
          <FiPlusSquare className="w-6 h-6" />
        </button>
        <button 
          onClick={() => setActiveTab('videos')} 
          className={`p-3 flex flex-col items-center ${activeTab === 'videos' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <FiPlay className="w-6 h-6" />
          <span className="text-xs mt-1">Videos</span>
        </button>
        <button 
          onClick={() => setActiveTab('profile')} 
          className={`p-3 flex flex-col items-center ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <FiUser className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </nav>

      {/* Create Post Modal *
      {showCreatePost && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10">
          <div className="bg-white rounded-xl w-full max-w-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Create Post</h2>
              <button onClick={() => setShowCreatePost(false)}>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="font-medium text-blue-600">YP</span>
              </div>
              <span className="font-medium">Your Profile</span>
            </div>
            
            <textarea 
              className="w-full border border-gray-300 rounded-lg p-3 mb-3" 
              placeholder="What's happening in Kenya today?"
              rows={4}
            />
            
            <div className="flex justify-between mb-4">
              <button className="p-2 rounded-lg bg-gray-100">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-gray-100">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-gray-100 flex items-center">
                <FiMapPin className="w-5 h-5 text-gray-500 mr-1" />
                <span className="text-sm">Location</span>
              </button>
            </div>
            
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-lg font-medium">
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KenyanSocialApp;*/

/*"use client"
import { useState } from 'react';
import { 
  FiHome, FiSearch, FiPlusCircle, FiMessageSquare, FiUser,
  FiShoppingBag, FiCalendar, FiTruck, FiPieChart, FiSettings,
  FiHeart, FiShare2, FiMail, FiClock, FiDollarSign, FiUsers
} from 'react-icons/fi';
import { BsThreeDotsVertical, BsDot, BsCheckCircleFill } from 'react-icons/bs';
import { MdOutlineHotel, MdOutlineRestaurant, MdEventAvailable } from 'react-icons/md';
import { FaTshirt } from 'react-icons/fa';

const B2BCollabPlatform = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeBusinessType, setActiveBusinessType] = useState('all');
  const [showNewPartnership, setShowNewPartnership] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  // Dummy data
  const businessTypes = [
    { id: 'all', name: 'All Businesses', icon: <FiHome /> },
    { id: 'fashion', name: 'Fashion', icon: <FaTshirt /> },
    { id: 'hotel', name: 'Hotels', icon: <MdOutlineHotel /> },
    { id: 'event', name: 'Events', icon: <MdEventAvailable /> },
    { id: 'supplier', name: 'Suppliers', icon: <FiTruck /> },
    { id: 'restaurant', name: 'Restaurants', icon: <MdOutlineRestaurant /> }
  ];

  const businesses = [
    {
      id: 1,
      name: "Nairobi Fashion House",
      type: "fashion",
      category: "Luxury Apparel",
      location: "Nairobi, Kenya",
      description: "Premium African-inspired fashion designs for global markets",
      rating: 4.8,
      partnerships: 42,
      image: "fashion-house.jpg",
      isPartner: true,
      stats: {
        orders: 1250,
        revenue: "$2.4M",
        growth: "+12%"
      }
    },
    {
      id: 2,
      name: "Savannah Suites",
      type: "hotel",
      category: "Boutique Hotel",
      location: "Mombasa, Kenya",
      description: "Luxury coastal accommodation with event facilities",
      rating: 4.6,
      partnerships: 28,
      image: "hotel.jpg",
      isPartner: false,
      stats: {
        capacity: "120 rooms",
        occupancy: "78%",
        growth: "+8%"
      }
    },
    {
      id: 3,
      name: "Elite Event Solutions",
      type: "event",
      category: "Corporate Events",
      location: "Nairobi, Kenya",
      description: "End-to-end event planning and execution",
      rating: 4.9,
      partnerships: 63,
      image: "event-company.jpg",
      isPartner: true,
      stats: {
        events: "320/yr",
        clients: "85+",
        growth: "+22%"
      }
    },
    {
      id: 4,
      name: "Prime Textile Suppliers",
      type: "supplier",
      category: "Fabric Wholesaler",
      location: "Kampala, Uganda",
      description: "African print fabrics and textile solutions",
      rating: 4.5,
      partnerships: 37,
      image: "textile-supplier.jpg",
      isPartner: false,
      stats: {
        inventory: "500+ SKUs",
        delivery: "Pan-Africa",
        growth: "+15%"
      }
    },
    {
      id: 5,
      name: "Kilimani Bistro",
      type: "restaurant",
      category: "Fine Dining",
      location: "Nairobi, Kenya",
      description: "Farm-to-table culinary experiences for corporate clients",
      rating: 4.7,
      partnerships: 19,
      image: "restaurant.jpg",
      isPartner: false,
      stats: {
        capacity: "80 seats",
        catering: "Available",
        growth: "+10%"
      }
    }
  ];

  const marketTrends = [
    {
      id: 1,
      title: "African Fashion Industry Growth",
      summary: "Market expected to grow by 15% in 2024 with increased global demand",
      category: "fashion",
      impact: "high"
    },
    {
      id: 2,
      title: "Hotel Occupancy Rates Rising",
      summary: "Coastal properties seeing 20% higher bookings this season",
      category: "hotel",
      impact: "medium"
    },
    {
      id: 3,
      title: "Sustainable Event Solutions",
      summary: "75% of corporate clients now request eco-friendly options",
      category: "event",
      impact: "high"
    }
  ];

  const partnershipRequests = [
    {
      id: 1,
      from: "Lamu Resort",
      type: "hotel",
      message: "Seeking fashion partners for staff uniforms redesign",
      date: "2 days ago",
      status: "pending"
    },
    {
      id: 2,
      from: "Kiondo Creations",
      type: "fashion",
      message: "Looking for bulk fabric suppliers with African prints",
      date: "1 week ago",
      status: "accepted"
    }
  ];

  const orders = [
    {
      id: 1,
      to: "Prime Textile Suppliers",
      items: "50 rolls Kitenge fabric",
      value: "$2,450",
      status: "shipped",
      date: "May 15, 2024"
    },
    {
      id: 2,
      to: "Nairobi Fashion House",
      items: "20 custom dresses",
      value: "$3,800",
      status: "in production",
      date: "May 5, 2024"
    }
  ];

  const messages = [
    {
      id: 1,
      from: "Savannah Suites",
      preview: "About the upcoming corporate retreat...",
      unread: true,
      time: "10:30 AM"
    },
    {
      id: 2,
      from: "Elite Event Solutions",
      preview: "Confirmed the venue for the product launch",
      unread: false,
      time: "Yesterday"
    }
  ];

  const renderBusinessCard = (business) => (
    <div key={business.id} className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
      <div className="relative">
        <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-500">
          {business.image.replace('.jpg', '')}
        </div>
        {business.isPartner && (
          <div className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
            <BsCheckCircleFill className="mr-1" /> Partner
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
          <FiHeart className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg">{business.name}</h3>
            <p className="text-sm text-gray-600">{business.category}</p>
          </div>
          <div className="flex items-center bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-sm">
            {business.rating} ★
          </div>
        </div>
        
        <p className="text-sm text-gray-700 mb-3">{business.description}</p>
        
        <div className="flex justify-between text-sm mb-3">
          <span className="flex items-center text-gray-600">
            <FiUsers className="mr-1" /> {business.partnerships} partners
          </span>
          <span className="text-gray-600">{business.location}</span>
        </div>
        
        <div className="flex space-x-2">
          <button 
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium"
            onClick={() => {
              setSelectedBusiness(business);
              setShowNewPartnership(true);
            }}
          >
            Partner
          </button>
          <button 
            className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg text-sm font-medium"
            onClick={() => {
              setSelectedBusiness(business);
              setShowOrderModal(true);
            }}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );

  const renderHomeTab = () => (
    <div className="p-4">
      {/* Business type filter *
      <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
        {businessTypes.map(type => (
          <button
            key={type.id}
            onClick={() => setActiveBusinessType(type.id)}
            className={`flex items-center space-x-1 px-3 py-2 rounded-full flex-shrink-0 ${activeBusinessType === type.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            <span className="text-lg">{type.icon}</span>
            <span className="text-sm">{type.name}</span>
          </button>
        ))}
      </div>
      
      {/* Market trends *
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold flex items-center">
            <FiPieChart className="mr-2" /> Market Trends
          </h3>
          <button className="text-blue-600 text-sm">See All</button>
        </div>
        
        <div className="space-y-3">
          {marketTrends.map(trend => (
            <div key={trend.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <div className="flex items-start">
                <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${trend.impact === 'high' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
                <div className="ml-2">
                  <h4 className="font-medium">{trend.title}</h4>
                  <p className="text-sm text-gray-600">{trend.summary}</p>
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mt-1">
                    {trend.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Businesses *
      <h3 className="font-bold text-lg mb-3">Featured Businesses</h3>
      <div className="mb-4">
        {businesses
          .filter(b => activeBusinessType === 'all' || b.type === activeBusinessType)
          .map(renderBusinessCard)
        }
      </div>
    </div>
  );

  const renderPartnershipsTab = () => (
    <div className="p-4">
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold">Partnership Requests</h3>
          <span className="text-blue-600 text-sm">3 New</span>
        </div>
        
        <div className="space-y-4">
          {partnershipRequests.map(request => (
            <div key={request.id} className="border-b border-gray-100 pb-4 last:border-0">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                    {request.type === 'fashion' ? <FaTshirt /> : <MdOutlineHotel />}
                  </div>
                  <div>
                    <p className="font-medium">{request.from}</p>
                    <p className="text-xs text-gray-500">{request.type} business</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${request.status === 'accepted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {request.status}
                </span>
              </div>
              
              <p className="text-sm text-gray-700 mb-2">{request.message}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{request.date}</span>
                <div className="flex space-x-2">
                  {request.status === 'pending' && (
                    <>
                      <button className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        Accept
                      </button>
                      <button className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                        Decline
                      </button>
                    </>
                  )}
                  <button className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center"
        onClick={() => setShowNewPartnership(true)}
      >
        <FiPlusCircle className="mr-2" /> New Partnership
      </button>
    </div>
  );

  const renderOrdersTab = () => (
    <div className="p-4">
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
        <h3 className="font-bold mb-3">Recent Orders</h3>
        
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="border-b border-gray-100 pb-4 last:border-0">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium">{order.to}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  order.status === 'shipped' ? 'bg-green-100 text-green-800' : 
                  order.status === 'in production' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-gray-100 text-gray-800'
                }`}>
                  {order.status}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">{order.items}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{order.value}</span>
                <span className="text-xs text-gray-500">{order.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-medium">
        View Order History
      </button>
    </div>
  );

  const renderMessagesTab = () => (
    <div className="p-4">
      <div className="bg-white rounded-xl shadow-sm p-4">
        <h3 className="font-bold mb-3">Business Messages</h3>
        
        <div className="space-y-3">
          {messages.map(message => (
            <div key={message.id} className={`p-3 rounded-lg ${message.unread ? 'bg-blue-50' : 'bg-gray-50'}`}>
              <div className="flex justify-between items-start mb-1">
                <p className="font-medium">{message.from}</p>
                {message.unread && (
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                )}
              </div>
              <p className="text-sm text-gray-600 truncate">{message.preview}</p>
              <p className="text-xs text-gray-500 mt-1">{message.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfileTab = () => (
    <div className="p-4">
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-3">
          <span className="text-2xl font-bold text-blue-600">EC</span>
        </div>
        <h2 className="font-bold text-lg">Elegant Creations</h2>
        <p className="text-gray-500 text-sm mb-2">Fashion Brand • Nairobi, Kenya</p>
        
        <div className="flex space-x-4 my-3">
          <div className="flex flex-col items-center">
            <span className="font-bold">24</span>
            <span className="text-xs text-gray-500">Partners</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">156</span>
            <span className="text-xs text-gray-500">Orders</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">42</span>
            <span className="text-xs text-gray-500">Products</span>
          </div>
        </div>
        
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium mt-2">
          View Business Profile
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-4">
        <h3 className="font-medium mb-3">Business Tools</h3>
        <div className="space-y-3">
          <button className="w-full text-left flex items-center p-3 bg-gray-50 rounded-lg">
            <FiPieChart className="w-5 h-5 mr-3 text-blue-600" />
            <span>Analytics Dashboard</span>
          </button>
          <button className="w-full text-left flex items-center p-3 bg-gray-50 rounded-lg">
            <FiShoppingBag className="w-5 h-5 mr-3 text-blue-600" />
            <span>Product Catalog</span>
          </button>
          <button className="w-full text-left flex items-center p-3 bg-gray-50 rounded-lg">
            <FiUsers className="w-5 h-5 mr-3 text-blue-600" />
            <span>Partner Network</span>
          </button>
          <button className="w-full text-left flex items-center p-3 bg-gray-50 rounded-lg">
            <FiSettings className="w-5 h-5 mr-3 text-blue-600" />
            <span>Business Settings</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative max-w-md mx-auto h-[800px] bg-gray-50 overflow-hidden border border-gray-200 rounded-2xl shadow-xl flex flex-col">
      {/* Header *
      <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-blue-600">B2B Connect</h1>
        <div className="flex items-center space-x-3">
          <button className="p-1">
            <FiSearch className="w-5 h-5" />
          </button>
          <button className="p-1">
            <FiMail className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content *
      <main className="flex-1 overflow-y-auto pb-16">
        {activeTab === 'home' && renderHomeTab()}
        {activeTab === 'partnerships' && renderPartnershipsTab()}
        {activeTab === 'orders' && renderOrdersTab()}
        {activeTab === 'messages' && renderMessagesTab()}
        {activeTab === 'profile' && renderProfileTab()}
      </main>

      {/* Bottom Navigation *
      <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around">
        <button 
          onClick={() => setActiveTab('home')} 
          className={`p-3 flex flex-col items-center ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <FiHome className="w-6 h-6" />
          <span className="text-xs mt-1">Discover</span>
        </button>
        <button 
          onClick={() => setActiveTab('partnerships')} 
          className={`p-3 flex flex-col items-center ${activeTab === 'partnerships' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <FiUsers className="w-6 h-6" />
          <span className="text-xs mt-1">Partners</span>
        </button>
        <button 
          onClick={() => setActiveTab('orders')} 
          className={`p-3 flex flex-col items-center ${activeTab === 'orders' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <FiShoppingBag className="w-6 h-6" />
          <span className="text-xs mt-1">Orders</span>
        </button>
        <button 
          onClick={() => setActiveTab('messages')} 
          className={`p-3 flex flex-col items-center ${activeTab === 'messages' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <FiMessageSquare className="w-6 h-6" />
          <span className="text-xs mt-1">Messages</span>
        </button>
        <button 
          onClick={() => setActiveTab('profile')} 
          className={`p-3 flex flex-col items-center ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <FiUser className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </nav>

      {/* New Partnership Modal *
      {showNewPartnership && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10">
          <div className="bg-white rounded-xl w-full max-w-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">
                {selectedBusiness ? `Partner with ${selectedBusiness.name}` : 'New Partnership'}
              </h2>
              <button onClick={() => setShowNewPartnership(false)}>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {selectedBusiness ? (
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    {selectedBusiness.type === 'fashion' ? <FaTshirt /> : 
                     selectedBusiness.type === 'hotel' ? <MdOutlineHotel /> :
                     selectedBusiness.type === 'event' ? <MdEventAvailable /> :
                     <FiTruck />}
                  </div>
                  <div>
                    <h3 className="font-medium">{selectedBusiness.name}</h3>
                    <p className="text-sm text-gray-600">{selectedBusiness.category}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Type</label>
                  <select className="w-full border border-gray-300 rounded-lg p-2">
                    <option>Supplier Agreement</option>
                    <option>Service Partnership</option>
                    <option>Co-Marketing</option>
                    <option>Distribution</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    className="w-full border border-gray-300 rounded-lg p-2" 
                    rows={3}
                    placeholder="Describe the partnership opportunity"
                  />
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium">
                  Send Partnership Request
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Search Business</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg p-2" 
                    placeholder="Search by name or industry"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Type</label>
                  <select className="w-full border border-gray-300 rounded-lg p-2">
                    <option>Select partnership type</option>
                    <option>Supplier Agreement</option>
                    <option>Service Partnership</option>
                    <option>Co-Marketing</option>
                    <option>Distribution</option>
                  </select>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium">
                  Find Potential Partners
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* New Order Modal *
      {showOrderModal && selectedBusiness && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10">
          <div className="bg-white rounded-xl w-full max-w-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">New Order to {selectedBusiness.name}</h2>
              <button onClick={() => setShowOrderModal(false)}>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Items/Service</label>
              <textarea 
                className="w-full border border-gray-300 rounded-lg p-2" 
                rows={2}
                placeholder="Describe what you're ordering"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                <input 
                  type="number" 
                  className="w-full border border-gray-300 rounded-lg p-2" 
                  placeholder="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Value ($)</label>
                <input 
                  type="number" 
                  className="w-full border border-gray-300 rounded-lg p-2" 
                  placeholder="0.00"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Date</label>
              <input 
                type="date" 
                className="w-full border border-gray-300 rounded-lg p-2" 
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
              <textarea 
                className="w-full border border-gray-300 rounded-lg p-2" 
                rows={2}
                placeholder="Any specific requirements?"
              />
            </div>
            
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium">
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default B2BCollabPlatform;*/





/*"use client"
import { useState, useEffect } from 'react';
import {
  FiHome, FiSearch, FiShoppingCart, FiUser, FiMenu,
  FiMessageSquare, FiHeart, FiShare2, FiClock, FiStar,
  FiFilter, FiChevronLeft, FiChevronRight, FiPlus, FiMinus,
  FiMail, FiPhone, FiMapPin, FiCreditCard, FiTruck,
  FiChevronDown
} from 'react-icons/fi';
import { BsDot, BsCheckCircleFill, BsChatLeftText } from 'react-icons/bs';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const UniversalEcommercePlatform = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dummy data - can be replaced with actual data for each client
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'featured', name: 'Featured' },
    { id: 'popular', name: 'Popular' },
    { id: 'new', name: 'New Arrivals' },
    { id: 'deals', name: 'Deals' }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Designer Chair",
      price: 249.99,
      oldPrice: 299.99,
      rating: 4.8,
      reviews: 124,
      image: "designer-chair.jpg",
      category: "furniture",
      stock: 15,
      description: "Ergonomic designer chair with premium materials and adjustable features.",
      specs: ["Material: Genuine Leather", "Weight Capacity: 300lbs", "Dimensions: 25x25x40"]
    },
    {
      id: 2,
      name: "Smart Home Thermostat",
      price: 129.99,
      rating: 4.5,
      reviews: 89,
      image: "thermostat.jpg",
      category: "electronics",
      stock: 42,
      description: "Wi-Fi enabled smart thermostat with energy saving features.",
      specs: ["Compatible with Alexa", "Energy Star Certified", "Touchscreen Display"]
    },
    {
      id: 3,
      name: "Organic Cleaning Solution",
      price: 14.99,
      rating: 4.7,
      reviews: 56,
      image: "cleaning-solution.jpg",
      category: "chemicals",
      stock: 120,
      description: "Eco-friendly cleaning solution safe for all surfaces.",
      specs: ["Non-toxic", "Biodegradable", "1 Gallon"]
    },
    {
      id: 4,
      name: "Stainless Steel Blender",
      price: 79.99,
      oldPrice: 99.99,
      rating: 4.3,
      reviews: 210,
      image: "blender.jpg",
      category: "appliances",
      stock: 28,
      description: "Professional-grade blender with 1000W motor.",
      specs: ["6 Blades", "8 Speed Settings", "64oz Capacity"]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah K.",
      comment: "The designer chair exceeded my expectations! Super comfortable and looks amazing in my office.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael T.",
      comment: "Fast shipping and excellent customer service. The thermostat works perfectly with my smart home setup.",
      rating: 4
    }
  ];

  const chatMessages = [
    {
      id: 1,
      sender: "customer",
      text: "Hi, is this chair available in other colors?",
      time: "10:30 AM"
    },
    {
      id: 2,
      sender: "support",
      text: "Hello! Yes, it comes in black, white, and brown. Would you like to see pictures?",
      time: "10:32 AM"
    }
  ];

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setQuantity(1);
    setShowProductModal(false);
    if (isMobile) setShowCart(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: "customer",
          text: newMessage,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setNewMessage('');
      // Simulate reply after 1 second
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: "support",
            text: "Thanks for your message! Our team will respond shortly.",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }, 1000);
    }
  };

  const renderProductCard = (product) => (
    <div 
      key={product.id} 
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => {
        setSelectedProduct(product);
        setShowProductModal(true);
      }}
    >
      <div className="relative">
        <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500">
          {product.image.replace('.jpg', '')}
        </div>
        {product.oldPrice && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            Sale
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FiStar 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-lg">${product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">${product.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );

  const renderMobileView = () => (
    <div className="relative h-full flex flex-col">
      {/* Mobile Header *
      <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <button onClick={() => setActiveTab('home')}>
          <h1 className="font-bold text-xl text-blue-600">ShopName</h1>
        </button>
        <div className="flex items-center space-x-4">
          <button>
            <FiSearch className="w-5 h-5" />
          </button>
          <button className="relative" onClick={() => setShowCart(!showCart)}>
            <FiShoppingCart className="w-5 h-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
          <button onClick={() => setActiveTab('account')}>
            <FiUser className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Main Content *
      <main className="flex-1 overflow-y-auto pb-16">
        {activeTab === 'home' && (
          <div className="p-4">
            {/* Categories *
            <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full flex-shrink-0 ${
                    activeTab === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Products *
            <div className="grid grid-cols-2 gap-4">
              {products.map(renderProductCard)}
            </div>
          </div>
        )}

        {activeTab === 'account' && (
          <div className="p-4">
            <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">JS</span>
                </div>
                <div>
                  <h3 className="font-bold">John Smith</h3>
                  <p className="text-sm text-gray-600">john@example.com</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full text-left flex items-center p-3 bg-gray-50 rounded-lg">
                  <FiUser className="w-5 h-5 mr-3 text-blue-600" />
                  <span>My Profile</span>
                </button>
                <button className="w-full text-left flex items-center p-3 bg-gray-50 rounded-lg">
                  <FiShoppingCart className="w-5 h-5 mr-3 text-blue-600" />
                  <span>My Orders</span>
                </button>
                <button className="w-full text-left flex items-center p-3 bg-gray-50 rounded-lg">
                  <FiHeart className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Wishlist</span>
                </button>
                <button 
                  className="w-full text-left flex items-center p-3 bg-gray-50 rounded-lg"
                  onClick={() => setShowChat(true)}
                >
                  <FiMessageSquare className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Customer Support</span>
                </button>
              </div>
            </div>
            
            <button className="w-full bg-red-100 text-red-600 py-3 rounded-lg font-medium">
              Sign Out
            </button>
          </div>
        )}
      </main>

      {/* Mobile Bottom Navigation *
      <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around">
        <button 
          onClick={() => setActiveTab('home')} 
          className={`p-3 flex flex-col items-center ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <FiHome className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button 
          onClick={() => setActiveTab('search')} 
          className={`p-3 flex flex-col items-center ${activeTab === 'search' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <FiSearch className="w-6 h-6" />
          <span className="text-xs mt-1">Search</span>
        </button>
        <button 
          onClick={() => setShowCart(true)} 
          className={`p-3 flex flex-col items-center ${showCart ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <div className="relative">
            <FiShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </div>
          <span className="text-xs mt-1">Cart</span>
        </button>
        <button 
          onClick={() => setActiveTab('account')} 
          className={`p-3 flex flex-col items-center ${activeTab === 'account' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <FiUser className="w-6 h-6" />
          <span className="text-xs mt-1">Account</span>
        </button>
      </nav>

      {/* Mobile Product Modal *
      {showProductModal && selectedProduct && (
        <div className="absolute inset-0 bg-white z-10 overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
            <button onClick={() => setShowProductModal(false)}>
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="font-bold text-lg">{selectedProduct.name}</h2>
            <button>
              <FiShare2 className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4">
            <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center text-gray-500 mb-4">
              {selectedProduct.image.replace('.jpg', '')}
            </div>
            
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-xl">{selectedProduct.name}</h3>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(selectedProduct.rating) ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({selectedProduct.reviews})</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-xl">${selectedProduct.price}</p>
                {selectedProduct.oldPrice && (
                  <p className="text-sm text-gray-500 line-through">${selectedProduct.oldPrice}</p>
                )}
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700">{selectedProduct.description}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Specifications</h4>
              <ul className="space-y-1">
                {selectedProduct.specs.map((spec, i) => (
                  <li key={i} className="flex items-start">
                    <BsDot className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button 
                  className="px-3 py-2"
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                >
                  <FiMinus className="w-4 h-4" />
                </button>
                <span className="px-3 py-2">{quantity}</span>
                <button 
                  className="px-3 py-2"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-gray-600">{selectedProduct.stock} in stock</span>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg font-medium">
                Add to Wishlist
              </button>
              <button 
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium"
                onClick={() => addToCart(selectedProduct)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Cart Sidebar *
      {showCart && (
        <div className="absolute inset-0 bg-white z-10 flex flex-col">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
            <h2 className="font-bold text-lg">Your Cart</h2>
            <button onClick={() => setShowCart(false)}>
              <FiChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <button 
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex border-b border-gray-100 pb-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-500">
                      {item.image.replace('.jpg', '')}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <button onClick={() => removeFromCart(item.id)}>
                          <span className="text-gray-400">×</span>
                        </button>
                      </div>
                      <p className="text-gray-600">${item.price}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button 
                            className="px-2 py-1"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <FiMinus className="w-3 h-3" />
                          </button>
                          <span className="px-2 py-1 text-sm">{item.quantity}</span>
                          <button 
                            className="px-2 py-1"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <FiPlus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span className="font-medium">
                  ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      )}

      {/* Mobile Chat Modal *
      {showChat && (
        <div className="absolute inset-0 bg-white z-10 flex flex-col">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <button 
                className="mr-2"
                onClick={() => setShowChat(false)}
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <div>
                <h2 className="font-bold">Customer Support</h2>
                <p className="text-xs text-gray-500">Typically replies in minutes</p>
              </div>
            </div>
            <button>
              <FiPhone className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chatMessages.map(msg => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.sender === 'customer' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === 'customer' ? 'text-blue-200' : 'text-gray-500'
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-3">
            <div className="flex items-center">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderDesktopView = () => (
    <div className="h-full flex">
      {/* Desktop Sidebar *
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="font-bold text-2xl text-blue-600">ShopName</h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            <button 
              className={`w-full flex items-center p-3 rounded-lg ${
                activeTab === 'home' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('home')}
            >
              <FiHome className="w-5 h-5 mr-3" />
              <span>Home</span>
            </button>
            
            <button 
              className={`w-full flex items-center p-3 rounded-lg ${
                activeTab === 'products' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('products')}
            >
              <FiShoppingCart className="w-5 h-5 mr-3" />
              <span>Products</span>
            </button>
            
            <button 
              className={`w-full flex items-center p-3 rounded-lg ${
                activeTab === 'orders' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('orders')}
            >
              <FiCreditCard className="w-5 h-5 mr-3" />
              <span>My Orders</span>
            </button>
            
            <button 
              className={`w-full flex items-center p-3 rounded-lg ${
                activeTab === 'wishlist' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('wishlist')}
            >
              <FiHeart className="w-5 h-5 mr-3" />
              <span>Wishlist</span>
            </button>
            
            <button 
              className={`w-full flex items-center p-3 rounded-lg ${
                activeTab === 'account' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('account')}
            >
              <FiUser className="w-5 h-5 mr-3" />
              <span>Account</span>
            </button>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <button 
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium"
            onClick={() => setShowChat(true)}
          >
            Contact Support
          </button>
        </div>
      </aside>

      {/* Desktop Main Content *
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Desktop Header *
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <div className="relative flex-1 max-w-xl">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-4 ml-6">
            <button className="relative" onClick={() => setShowCart(!showCart)}>
              <FiShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
            
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-sm font-medium text-blue-600">JS</span>
            </div>
          </div>
        </header>

        {/* Desktop Content Area *
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'home' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.filter(p => p.category === 'featured').map(renderProductCard)}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.filter(p => p.category === 'new').map(renderProductCard)}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4">Customer Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                          <span className="text-sm font-medium">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <FiStar 
                                key={i} 
                                className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : ''}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">"{testimonial.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">All Products</h2>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                    <FiFilter className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm">Filter</span>
                  </div>
                  <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                    <span className="text-sm">Sort by</span>
                    <FiChevronDown className="w-4 h-4 ml-2 text-gray-500" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(renderProductCard)}
              </div>
            </div>
          )}
          
          {activeTab === 'account' && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-medium mb-3">Personal Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          value="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          value="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          type="tel"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          value="+254 712 345 678"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Shipping Address</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          value="123 Business Plaza"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          value="Nairobi"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                          <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            value="00100"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                          <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
                            <option>Kenya</option>
                            <option>Uganda</option>
                            <option>Tanzania</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
                  Save Changes
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-medium mb-4">Security</h3>
                <div className="space-y-4">
                  <button className="w-full text-left flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>Change Password</span>
                    <FiChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="w-full text-left flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>Two-Factor Authentication</span>
                    <FiChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Desktop Product Modal *
      {showProductModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="font-bold text-xl">{selectedProduct.name}</h2>
              <button onClick={() => setShowProductModal(false)}>
                <span className="text-2xl">×</span>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center text-gray-500">
                  {selectedProduct.image.replace('.jpg', '')}
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-2xl">{selectedProduct.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <FiStar 
                              key={i} 
                              className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? 'fill-current' : ''}`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-600">({selectedProduct.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl">${selectedProduct.price}</p>
                      {selectedProduct.oldPrice && (
                        <p className="text-gray-500 line-through">${selectedProduct.oldPrice}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Specifications</h4>
                      <ul className="space-y-2">
                        {selectedProduct.specs.map((spec, i) => (
                          <li key={i} className="flex">
                            <BsDot className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button 
                          className="px-4 py-2"
                          onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                        >
                          <FiMinus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2">{quantity}</span>
                        <button 
                          className="px-4 py-2"
                          onClick={() => setQuantity(prev => prev + 1)}
                        >
                          <FiPlus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-gray-600">{selectedProduct.stock} in stock</span>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg font-medium">
                        Add to Wishlist
                      </button>
                      <button 
                        className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium"
                        onClick={() => addToCart(selectedProduct)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Cart Sidebar *
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="font-bold text-xl">Your Cart ({cartItems.length})</h2>
              <button onClick={() => setShowCart(false)}>
                <span className="text-2xl">×</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500 mb-6">Your cart is empty</p>
                  <button 
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                    onClick={() => setShowCart(false)}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex border-b border-gray-100 pb-4">
                      <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-500">
                        {item.image.replace('.jpg', '')}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.name}</h3>
                          <button onClick={() => removeFromCart(item.id)}>
                            <span className="text-gray-400">×</span>
                          </button>
                        </div>
                        <p className="text-gray-600">${item.price}</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button 
                              className="px-2 py-1"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <FiMinus className="w-3 h-3" />
                            </button>
                            <span className="px-3 py-1 text-sm">{item.quantity}</span>
                            <button 
                              className="px-2 py-1"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <FiPlus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium">
                      ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-lg">
                      ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Desktop Chat Modal *
      {showChat && (
        <div className="fixed bottom-6 right-6 w-80 bg-white rounded-t-xl shadow-xl border border-gray-200 flex flex-col z-50">
          <div className="bg-blue-600 text-white p-3 rounded-t-xl flex justify-between items-center">
            <div>
              <h3 className="font-medium">Customer Support</h3>
              <p className="text-xs opacity-80">Typically replies in minutes</p>
            </div>
            <div className="flex space-x-2">
              <button>
                <FiPhone className="w-4 h-4" />
              </button>
              <button onClick={() => setShowChat(false)}>
                <span className="text-lg">×</span>
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-96">
            {chatMessages.map(msg => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.sender === 'customer' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === 'customer' ? 'text-blue-200' : 'text-gray-500'
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 p-3">
            <div className="flex items-center">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default UniversalEcommercePlatform;*/




"use client"
import { useState, useEffect } from 'react';
import { 
  FiHome, FiCompass, FiPlusSquare, FiMusic, FiBell,
  FiUser, FiHeart, FiMessageSquare, FiShare2, FiMoreHorizontal,
  FiClock, FiPlay, FiHeadphones, FiBookmark,
  FiMapPin, FiSearch
} from 'react-icons/fi';
import { IoNewspaperOutline } from 'react-icons/io5';
import { BsThreeDotsVertical, BsDot, BsGrid3X3, BsBookmark } from 'react-icons/bs';
import { RiVideoLine } from 'react-icons/ri';

const KenyanSocialApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dummy data - Kenyan focused
  const trendingNow = [
    { id: 1, title: "Finance Bill 2024", posts: "45.2K" },
    { id: 2, title: "AFCON Qualifiers", posts: "38.7K" },
    { id: 3, title: "Nairobi Expressway", posts: "22.1K" },
    { id: 4, title: "Mpesa New Features", posts: "18.9K" }
  ];

  const newsStories = [
    {
      id: 1,
      title: "Parliament Approves New Finance Bill Amid Protests",
      summary: "The National Assembly has passed the controversial Finance Bill 2024 with amendments after lengthy debates.",
      source: "Daily Nation",
      time: "1h ago",
      image: "finance-bill.jpg",
      category: "Politics"
    },
    {
      id: 2,
      title: "Kenya Wins Bid to Host 2027 AFCON Tournament",
      summary: "East Africa will host the continental showpiece for the first time in history.",
      source: "Standard Sports",
      time: "3h ago",
      image: "afcon.jpg",
      category: "Sports"
    },
    {
      id: 3,
      title: "New Mpesa Feature Allows Cross-Network Transfers",
      summary: "Safaricom announces interoperability with Airtel and Telkom money platforms starting next month.",
      source: "Techweez",
      time: "5h ago",
      image: "mpesa.jpg",
      category: "Technology"
    }
  ];

  const reels = [
    {
      id: 1,
      user: "NairobiFoodie",
      caption: "Trying the new nyama choma spot in Westlands! 🔥",
      likes: "12.4K",
      comments: "842",
      song: "Original Sound - NairobiFoodie",
      isLiked: false,
      isFollowing: false
    },
    {
      id: 2,
      user: "KOT_Humor",
      caption: "When your nduthi guy says '5 minutes' 😂 #Nairobi",
      likes: "45.7K",
      comments: "3.2K",
      song: "Sauti Sol - Sura Yako",
      isLiked: true,
      isFollowing: true
    },
    {
      id: 3,
      user: "MaasaiAdventures",
      caption: "Sunrise at Amboseli #VisitKenya",
      likes: "8.2K",
      comments: "312",
      song: "Original Sound - MaasaiAdventures",
      isLiked: false,
      isFollowing: false
    }
  ];

  const longVideos = [
    {
      id: 1,
      title: "Full Documentary: The Making of Nairobi",
      creator: "Kenya Archives",
      views: "124K",
      time: "42:15",
      thumbnail: "nairobi-doc.jpg",
      category: "Education"
    },
    {
      id: 2,
      title: "Cooking With Wanjiru: How to Make Githeri Special",
      creator: "Wanjiru Kitchen",
      views: "87K",
      time: "15:30",
      thumbnail: "githeri.jpg",
      category: "Food"
    },
    {
      id: 3,
      title: "Nairobi Nightlife: Best Clubs to Visit in 2024",
      creator: "City Buzz",
      views: "56K",
      time: "18:45",
      thumbnail: "nightlife.jpg",
      category: "Entertainment"
    }
  ];

  const podcasts = [
    {
      id: 1,
      title: "The Messy Truth About Kenyan Politics",
      host: "The Kenya Today Podcast",
      duration: "58:22",
      plays: "12.4K",
      thumbnail: "politics-podcast.jpg",
      category: "Politics"
    },
    {
      id: 2,
      title: "Gengetone Revolution: Music & Culture",
      host: "Sound of Nairobi",
      duration: "36:45",
      plays: "8.7K",
      thumbnail: "gengetone.jpg",
      category: "Music"
    },
    {
      id: 3,
      title: "Tech Talk: Kenya's Silicon Savannah",
      host: "Digital Kenya",
      duration: "45:10",
      plays: "6.2K",
      thumbnail: "tech-podcast.jpg",
      category: "Technology"
    }
  ];

  const followingPosts = [
    {
      id: 1,
      user: {
        name: "Nairobi Gossip",
        handle: "@nairobibuzz",
        avatar: "NG",
        isVerified: true
      },
      content: "Breaking: Popular city club closed by authorities over license issues. More details to follow.",
      image: "club-closed.jpg",
      time: "45m ago",
      likes: "2.4K",
      comments: "342",
      shares: "128"
    },
    {
      id: 2,
      user: {
        name: "Mwangi",
        handle: "@mwangist",
        avatar: "MW",
        isVerified: false
      },
      content: "Traffic on Thika Road is something else today! 2 hours and counting. #NairobiTraffic",
      image: "thika-traffic.jpg",
      time: "2h ago",
      likes: "1.2K",
      comments: "87",
      shares: "32"
    },
    {
      id: 3,
      user: {
        name: "Kenya Travel",
        handle: "@kenyatravel",
        avatar: "KT",
        isVerified: true
      },
      content: "New direct flights from Nairobi to New York starting next month! Book now for early bird discounts.",
      image: "nbo-jfk.jpg",
      time: "5h ago",
      likes: "3.7K",
      comments: "512",
      shares: "245"
    }
  ];

  const toggleLike = (id, type) => {
    if (type === 'reel') {
      setLikedPosts(prev => 
        prev.includes(id) 
          ? prev.filter(postId => postId !== id) 
          : [...prev, id]
      );
    }
    // Can be expanded for other post types
  };

  const toggleSave = (id) => {
    setSavedPosts(prev => 
      prev.includes(id) 
        ? prev.filter(postId => postId !== id) 
        : [...prev, id]
    );
  };

  const renderDesktopSidebar = () => (
    <div className="w-64 h-full border-r border-gray-200 bg-white flex flex-col">
      <div className="p-4">
        <h1 className="font-bold text-2xl text-blue-600 mb-8">BomaSocial</h1>
        
        <nav className="space-y-2">
          <button 
            onClick={() => setActiveTab('home')} 
            className={`flex items-center space-x-3 w-full p-3 rounded-lg ${activeTab === 'home' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <FiHome className="w-5 h-5" />
            <span>Home</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('reels')} 
            className={`flex items-center space-x-3 w-full p-3 rounded-lg ${activeTab === 'reels' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <FiCompass className="w-5 h-5" />
            <span>Reels</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('videos')} 
            className={`flex items-center space-x-3 w-full p-3 rounded-lg ${activeTab === 'videos' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <RiVideoLine className="w-5 h-5" />
            <span>Videos</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('podcasts')} 
            className={`flex items-center space-x-3 w-full p-3 rounded-lg ${activeTab === 'podcasts' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <FiHeadphones className="w-5 h-5" />
            <span>Podcasts</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('profile')} 
            className={`flex items-center space-x-3 w-full p-3 rounded-lg ${activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <FiUser className="w-5 h-5" />
            <span>Profile</span>
          </button>
        </nav>
      </div>
      
      <div className="p-4 mt-auto">
        <button 
          onClick={() => setShowCreatePost(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2.5 rounded-lg font-medium flex items-center justify-center space-x-2"
        >
          <FiPlusSquare className="w-5 h-5" />
          <span>Create Post</span>
        </button>
      </div>
    </div>
  );

  const renderDesktopHeader = () => (
    <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search BomaSocial" 
            className="w-full bg-gray-100 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <FiBell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <FiMessageSquare className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="font-medium text-blue-600">YP</span>
        </div>
      </div>
    </header>
  );

  const renderStories = () => (
    <div className="flex space-x-4 px-4 py-3 overflow-x-auto scrollbar-hide">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((story) => (
        <div key={story} className="flex flex-col items-center flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-red-500 p-0.5 mb-1">
            <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
              <span className="font-bold text-yellow-600">{['NG', 'MW', 'KT', 'FD', 'SP', 'KB', 'NM', 'TL'][story-1]}</span>
            </div>
          </div>
          <span className="text-xs truncate w-16 text-center">{['Nairobi', 'Mwangi', 'Kenya', 'Food', 'Sports', 'Kibaki', 'Nairobi', 'Travel'][story-1]}</span>
        </div>
      ))}
    </div>
  );

  const renderTrendingNow = () => (
    <div className="bg-gray-100 px-4 py-3 mb-3 rounded-lg mx-4">
      <h3 className="font-bold text-sm mb-2">TRENDING IN KENYA</h3>
      <div className="space-y-2">
        {trendingNow.map(trend => (
          <div key={trend.id} className="flex justify-between items-center hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
            <div>
              <p className="font-medium">{trend.title}</p>
              <p className="text-xs text-gray-500">{trend.posts} posts</p>
            </div>
            <BsThreeDotsVertical className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );

  const renderNewsCard = (news) => (
    <div key={news.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-500">
          {news.image.replace('.jpg', '')}
        </div>
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
          {news.category}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-bold mb-1">{news.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{news.summary}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">{news.source} <BsDot className="inline" /> {news.time}</span>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-800">Read</button>
        </div>
      </div>
    </div>
  );

  const renderPost = (post) => (
    <div key={post.id} className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden hover:shadow-md transition-shadow">
      {/* Post header */}
      <div className="p-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="font-medium text-blue-600">{post.user.avatar}</span>
          </div>
          <div>
            <div className="flex items-center">
              <p className="font-medium">{post.user.name}</p>
              {post.user.isVerified && (
                <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              )}
            </div>
            <p className="text-xs text-gray-500">{post.user.handle} <BsDot className="inline" /> {post.time}</p>
          </div>
        </div>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <BsThreeDotsVertical className="text-gray-400" />
        </button>
      </div>

      {/* Post content */}
      <div className="px-3 pb-2">
        <p className="mb-2">{post.content}</p>
      </div>

      {/* Post image */}
      <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500">
        {post.image.replace('.jpg', '')}
      </div>

      {/* Post actions */}
      <div className="p-3 flex justify-between">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 hover:text-red-500">
            <FiHeart className="w-5 h-5" />
            <span className="text-sm">{post.likes}</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <FiMessageSquare className="w-5 h-5" />
            <span className="text-sm">{post.comments}</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-green-500">
            <FiShare2 className="w-5 h-5" />
            <span className="text-sm">{post.shares}</span>
          </button>
        </div>
        <button onClick={() => toggleSave(post.id)} className="hover:text-yellow-500">
          <FiBookmark className={`w-5 h-5 ${savedPosts.includes(post.id) ? 'text-yellow-500 fill-yellow-500' : ''}`} />
        </button>
      </div>
    </div>
  );

  const renderVideoCard = (video) => (
    <div key={video.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="bg-gray-200 aspect-video flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
            <FiPlay className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1.5 py-1 rounded">
          {video.time}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium mb-1">{video.title}</h3>
        <p className="text-sm text-gray-600">{video.creator} • {video.views} views</p>
        <div className="flex mt-2">
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{video.category}</span>
        </div>
      </div>
    </div>
  );

  const renderPodcastCard = (podcast) => (
    <div key={podcast.id} className="bg-white rounded-xl shadow-sm p-3 flex hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-500 mr-3">
        {podcast.thumbnail.replace('.jpg', '')}
      </div>
      <div className="flex-1">
        <h3 className="font-medium mb-1">{podcast.title}</h3>
        <p className="text-sm text-gray-600 mb-1">{podcast.host}</p>
        <div className="flex items-center text-xs text-gray-500">
          <span>{podcast.duration}</span>
          <BsDot className="mx-1" />
          <span>{podcast.plays} plays</span>
          <BsDot className="mx-1" />
          <span className="text-blue-600">{podcast.category}</span>
        </div>
      </div>
      <button className="self-center p-2 rounded-full hover:bg-gray-100">
        <FiPlay className="w-5 h-5 text-blue-600" />
      </button>
    </div>
  );

  const renderHomeTab = () => (
    <div className="pb-4">
      {isMobile ? (
        <>
          {/* Mobile layout */}
          {renderStories()}
          {renderTrendingNow()}
          
          <div className="px-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-lg flex items-center">
                <IoNewspaperOutline className="mr-2" /> Kenya News
              </h2>
              <button className="text-blue-600 text-sm hover:text-blue-800">See All</button>
            </div>
            
            <div className="space-y-4">
              {newsStories.slice(0, 2).map(renderNewsCard)}
            </div>
          </div>

          {/* Following posts */}
          <div className="px-4">
            <h2 className="font-bold text-lg mb-3">From Following</h2>
            {followingPosts.map(renderPost)}
          </div>
        </>
      ) : (
        <>
          {/* Desktop layout */}
          <div className="grid grid-cols-12 gap-6 p-6">
            <div className="col-span-8 space-y-6">
              {/* Create post card */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-medium text-blue-600">YP</span>
                  </div>
                  <button 
                    onClick={() => setShowCreatePost(true)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full py-2 px-4 text-left transition-colors"
                  >
                    What's happening in Kenya today?
                  </button>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded-lg">
                    <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Photo</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded-lg">
                    <RiVideoLine className="w-5 h-5 mr-2 text-gray-500" />
                    <span>Video</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded-lg">
                    <FiHeadphones className="w-5 h-5 mr-2 text-gray-500" />
                    <span>Podcast</span>
                  </button>
                </div>
              </div>

              {/* Stories */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold">Stories</h3>
                  <button className="text-blue-600 text-sm hover:text-blue-800">See All</button>
                </div>
                <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((story) => (
                    <div key={story} className="flex flex-col items-center flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-red-500 p-0.5 mb-1">
                        <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                          <span className="font-bold text-yellow-600">{['NG', 'MW', 'KT', 'FD', 'SP', 'KB', 'NM', 'TL'][story-1]}</span>
                        </div>
                      </div>
                      <span className="text-xs truncate w-16 text-center">{['Nairobi', 'Mwangi', 'Kenya', 'Food', 'Sports', 'Kibaki', 'Nairobi', 'Travel'][story-1]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Following posts */}
              <div className="space-y-4">
                {followingPosts.map(renderPost)}
              </div>
            </div>

            <div className="col-span-4 space-y-6">
              {/* Trending in Kenya */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-bold text-sm mb-3">TRENDING IN KENYA</h3>
                <div className="space-y-3">
                  {trendingNow.map(trend => (
                    <div key={trend.id} className="flex justify-between items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                      <div>
                        <p className="font-medium">{trend.title}</p>
                        <p className="text-xs text-gray-500">{trend.posts} posts</p>
                      </div>
                      <BsThreeDotsVertical className="text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Kenya News */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="font-bold text-lg flex items-center">
                    <IoNewspaperOutline className="mr-2" /> Kenya News
                  </h2>
                  <button className="text-blue-600 text-sm hover:text-blue-800">See All</button>
                </div>
                
                <div className="space-y-4">
                  {newsStories.map(renderNewsCard)}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );

  const renderReelsTab = () => (
    <div className={`${isMobile ? 'h-full' : 'min-h-screen'} bg-black text-white`}>
      {isMobile ? (
        // Mobile reels view
        <div className="relative h-full">
          {/* Reel video placeholder */}
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center mb-4 mx-auto">
                <FiPlay className="w-6 h-6 ml-1" />
              </div>
              <p>Tap to play reel</p>
            </div>
          </div>
          
          {/* Reel info overlay */}
          <div className="absolute bottom-20 left-4 right-4">
            <div className="mb-4">
              <p className="font-medium">@{reels[0].user}</p>
              <p className="text-sm my-2">{reels[0].caption}</p>
              <div className="flex items-center">
                <FiMusic className="w-4 h-4 mr-2" />
                <p className="text-sm">{reels[0].song}</p>
              </div>
            </div>
          </div>
          
          {/* Right side actions */}
          <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-5">
            <div className="flex flex-col items-center">
              <button 
                onClick={() => toggleLike(reels[0].id, 'reel')}
                className="p-2"
              >
                <FiHeart className={`w-7 h-7 ${likedPosts.includes(reels[0].id) ? 'text-red-500 fill-red-500' : 'text-white'}`} />
              </button>
              <span className="text-xs">{reels[0].likes}</span>
            </div>
            
            <div className="flex flex-col items-center">
              <button className="p-2">
                <FiMessageSquare className="w-7 h-7 text-white" />
              </button>
              <span className="text-xs">{reels[0].comments}</span>
            </div>
            
            <div className="flex flex-col items-center">
              <button className="p-2">
                <FiShare2 className="w-7 h-7 text-white" />
              </button>
              <span className="text-xs">Share</span>
            </div>
            
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop reels view
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Reels</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                Upload Reel
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800">
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {reels.map(reel => (
              <div key={reel.id} className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[9/16]">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
                      <FiPlay className="w-6 h-6 ml-1" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-600">{reel.user.charAt(0)}</span>
                      </div>
                      <span className="font-medium">@{reel.user}</span>
                      {reel.isFollowing && (
                        <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full">Following</span>
                      )}
                    </div>
                    <p className="text-sm mb-2">{reel.caption}</p>
                    <div className="flex items-center text-xs text-gray-300">
                      <FiMusic className="mr-2" />
                      <span>{reel.song}</span>
                    </div>
                  </div>
                  
                  <div className="absolute right-4 bottom-1/2 transform translate-y-1/2 flex flex-col items-center space-y-5">
                    <div className="flex flex-col items-center">
                      <button 
                        onClick={() => toggleLike(reel.id, 'reel')}
                        className="p-2"
                      >
                        <FiHeart className={`w-7 h-7 ${likedPosts.includes(reel.id) ? 'text-red-500 fill-red-500' : 'text-white'}`} />
                      </button>
                      <span className="text-xs">{reel.likes}</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <button className="p-2">
                        <FiMessageSquare className="w-7 h-7 text-white" />
                      </button>
                      <span className="text-xs">{reel.comments}</span>
                    </div>
                    
                    <button className="p-2">
                      <FiShare2 className="w-7 h-7 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderVideosTab = () => (
    <div className={isMobile ? "p-4" : "p-6"}>
      {isMobile ? (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">Videos</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                For You
              </button>
              <button className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                Following
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {longVideos.map(renderVideoCard)}
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Videos</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search videos..." 
                  className="bg-gray-100 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white w-64"
                />
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                Upload Video
              </button>
            </div>
          </div>

          <div className="flex space-x-4 mb-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
              For You
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium">
              Following
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium">
              Trending
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium">
              Music
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {longVideos.map(renderVideoCard)}
          </div>
        </>
      )}
    </div>
  );

  const renderPodcastsTab = () => (
    <div className={isMobile ? "p-4" : "p-6"}>
      {isMobile ? (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg flex items-center">
              <FiHeadphones className="mr-2" /> Podcasts
            </h2>
            <button className="text-blue-600 text-sm">See All</button>
          </div>
          
          <div className="space-y-4">
            {podcasts.map(renderPodcastCard)}
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold flex items-center">
              <FiHeadphones className="mr-3" /> Podcasts
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search podcasts..." 
                  className="bg-gray-100 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white w-64"
                />
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                Create Podcast
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            {podcasts.slice(0, 2).map(podcast => (
              <div key={podcast.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow flex">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-500 mr-4">
                  {podcast.thumbnail.replace('.jpg', '')}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xl mb-2">{podcast.title}</h3>
                      <p className="text-gray-600 mb-3">{podcast.host}</p>
                    </div>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                      <FiBookmark className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{podcast.duration}</span>
                    <BsDot className="mx-2" />
                    <span>{podcast.plays} plays</span>
                    <BsDot className="mx-2" />
                    <span className="text-blue-600">{podcast.category}</span>
                  </div>
                  <div className="flex items-center">
                    <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                      <FiPlay className="w-6 h-6 text-white" />
                    </button>
                    <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">More Podcasts</h2>
          <div className="grid grid-cols-3 gap-6">
            {podcasts.map(renderPodcastCard)}
          </div>
        </>
      )}
    </div>
  );

  const renderProfileTab = () => (
    <div className={isMobile ? "p-4" : "p-6"}>
      {isMobile ? (
        <>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">YP</span>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-xl">Your Profile</h2>
              <p className="text-gray-600">@yourprofile</p>
            </div>
          </div>
          
          <div className="flex justify-around mb-6">
            <div className="flex flex-col items-center">
              <span className="font-bold">1,234</span>
              <span className="text-sm text-gray-600">Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">5.6K</span>
              <span className="text-sm text-gray-600">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">342</span>
              <span className="text-sm text-gray-600">Following</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2">Saved Items</h3>
            <div className="grid grid-cols-3 gap-1">
              {[1, 2, 3, 4, 5, 6].map(item => (
                <div key={item} className="aspect-square bg-gray-200 flex items-center justify-center text-gray-500">
                  {['News', 'Reel', 'Post', 'Video', 'News', 'Podcast'][item-1]}
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <button className="w-full text-left flex items-center p-3 bg-gray-100 rounded-lg">
              <FiUser className="w-5 h-5 mr-3" />
              <span>Edit Profile</span>
            </button>
            <button className="w-full text-left flex items-center p-3 bg-gray-100 rounded-lg">
              <FiBookmark className="w-5 h-5 mr-3" />
              <span>Saved Content</span>
            </button>
            <button className="w-full text-left flex items-center p-3 bg-gray-100 rounded-lg">
              <FiBell className="w-5 h-5 mr-3" />
              <span>Notifications</span>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center space-x-6">
              <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-600">YP</span>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <h1 className="text-2xl font-bold mr-3">Your Profile</h1>
                  <button className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium">
                    Edit Profile
                  </button>
                </div>
                <p className="text-gray-600 mb-4">@yourprofile</p>
                <p className="mb-4">Digital creator sharing Kenyan stories, culture, and trends. 🇰🇪</p>
                <div className="flex space-x-6">
                  <div className="flex flex-col">
                    <span className="font-bold">1,234</span>
                    <span className="text-sm text-gray-600">Posts</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">5.6K</span>
                    <span className="text-sm text-gray-600">Followers</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">342</span>
                    <span className="text-sm text-gray-600">Following</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
              Create Post
            </button>
          </div>

          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              <button className="px-4 py-3 border-b-2 border-black font-medium">
                <BsGrid3X3 className="inline mr-2" />
                Posts
              </button>
              <button className="px-4 py-3 text-gray-500 hover:text-black">
                <RiVideoLine className="inline mr-2" />
                Videos
              </button>
              <button className="px-4 py-3 text-gray-500 hover:text-black">
                <FiHeadphones className="inline mr-2" />
                Podcasts
              </button>
              <button className="px-4 py-3 text-gray-500 hover:text-black">
                <BsBookmark className="inline mr-2" />
                Saved
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(post => (
              <div key={post} className="aspect-square bg-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex items-center justify-center text-gray-500">
                {['Post', 'Video', 'Reel', 'News', 'Podcast', 'Photo', 'Story', 'Event', 'Poll'][post-1]}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <div className="relative max-w-md mx-auto h-[800px] bg-gray-50 overflow-hidden border border-gray-200 rounded-2xl shadow-xl flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h1 className="font-bold text-xl text-blue-600">BomaSocial</h1>
          <div className="flex items-center space-x-3">
            <button className="p-1">
              <FiBell className="w-5 h-5" />
            </button>
            <button className="p-1">
              <FiMessageSquare className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto pb-16">
          {activeTab === 'home' && renderHomeTab()}
          {activeTab === 'reels' && renderReelsTab()}
          {activeTab === 'videos' && renderVideosTab()}
          {activeTab === 'podcasts' && renderPodcastsTab()}
          {activeTab === 'profile' && renderProfileTab()}
        </main>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around">
          <button 
            onClick={() => setActiveTab('home')} 
            className={`p-3 flex flex-col items-center ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <FiHome className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button 
            onClick={() => setActiveTab('reels')} 
            className={`p-3 flex flex-col items-center ${activeTab === 'reels' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <FiCompass className="w-6 h-6" />
            <span className="text-xs mt-1">Reels</span>
          </button>
          <button 
            onClick={() => setShowCreatePost(true)}
            className="p-3 flex flex-col items-center text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full -mt-6 w-12 h-12 justify-center shadow-lg"
          >
            <FiPlusSquare className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setActiveTab('videos')} 
            className={`p-3 flex flex-col items-center ${activeTab === 'videos' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <FiPlay className="w-6 h-6" />
            <span className="text-xs mt-1">Videos</span>
          </button>
          <button 
            onClick={() => setActiveTab('profile')} 
            className={`p-3 flex flex-col items-center ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <FiUser className="w-6 h-6" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </nav>

        {/* Create Post Modal */}
        {showCreatePost && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10">
            <div className="bg-white rounded-xl w-full max-w-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">Create Post</h2>
                <button onClick={() => setShowCreatePost(false)}>
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="font-medium text-blue-600">YP</span>
                </div>
                <span className="font-medium">Your Profile</span>
              </div>
              
              <textarea 
                className="w-full border border-gray-300 rounded-lg p-3 mb-3" 
                placeholder="What's happening in Kenya today?"
                rows={4}
              />
              
              <div className="flex justify-between mb-4">
                <button className="p-2 rounded-lg bg-gray-100">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="p-2 rounded-lg bg-gray-100">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button className="p-2 rounded-lg bg-gray-100 flex items-center">
                  <FiMapPin className="w-5 h-5 text-gray-500 mr-1" />
                  <span className="text-sm">Location</span>
                </button>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-lg font-medium">
                Post
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {renderDesktopSidebar()}
      
      <div className="flex-1 flex flex-col">
        {renderDesktopHeader()}
        
        <main className="flex-1 overflow-y-auto">
          {activeTab === 'home' && renderHomeTab()}
          {activeTab === 'reels' && renderReelsTab()}
          {activeTab === 'videos' && renderVideosTab()}
          {activeTab === 'podcasts' && renderPodcastsTab()}
          {activeTab === 'profile' && renderProfileTab()}
        </main>
      </div>

      {/* Create Post Modal */}
      {showCreatePost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl">Create Post</h2>
              <button 
                onClick={() => setShowCreatePost(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="font-medium text-blue-600 text-lg">YP</span>
              </div>
              <div>
                <p className="font-medium">Your Profile</p>
                <div className="flex space-x-2 mt-1">
                  <button className="px-3 py-0.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium">
                    Public
                  </button>
                  <button className="px-3 py-0.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium flex items-center">
                    <FiMapPin className="w-3 h-3 mr-1" />
                    <span>Add Location</span>
                  </button>
                </div>
              </div>
            </div>
            
            <textarea 
              className="w-full border-0 text-xl p-3 mb-4 focus:outline-none resize-none" 
              placeholder="What's happening in Kenya today?"
              rows={5}
              autoFocus
            />
            
            <div className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Add to your post</h3>
                <button className="text-blue-600 text-sm font-medium">Add Poll</button>
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Photo/Video</span>
                </button>
                <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-lg">
                  <RiVideoLine className="w-5 h-5 mr-2 text-gray-500" />
                  <span>Live Video</span>
                </button>
                <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-lg">
                  <FiHeadphones className="w-5 h-5 mr-2 text-gray-500" />
                  <span>Podcast</span>
                </button>
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-medium text-lg hover:from-blue-700 hover:to-blue-600 transition-colors">
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KenyanSocialApp;