import React, { useState, useRef } from 'react';
import { Camera, MapPin, Upload, Send, ThumbsUp, Filter, Bell, User, Home, Plus, List, CheckCircle, Clock, AlertCircle, Menu, X } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Pothole on MG Road",
      description: "Large pothole causing traffic issues and vehicle damage. The road condition has deteriorated significantly after the recent rains.",
      category: "Roads",
      location: "MG Road, Sector 12",
      status: "In Progress",
      upvotes: 15,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNGI1NTYzIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5Qb3Rob2xlIEltYWdlPC90ZXh0Pgo8L3N2Zz4=",
      date: "2024-03-15",
      userVoted: false
    },
    {
      id: 2,
      title: "Garbage overflow near park",
      description: "Multiple bins are overflowing, creating unhygienic conditions and attracting stray animals. Immediate attention needed.",
      category: "Waste Management",
      location: "Central Park, Phase 2",
      status: "Reported",
      upvotes: 8,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZGM0NjI2Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5HYXJiYWdlIEltYWdlPC90ZXh0Pgo8L3N2Zz4=",
      date: "2024-03-14",
      userVoted: true
    },
    {
      id: 3,
      title: "Broken street light",
      description: "Street light not working since last week, making the area unsafe during night hours.",
      category: "Utilities",
      location: "Elm Street, Block A",
      status: "Resolved",
      upvotes: 12,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMTY4NWE3Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5TdHJlZXQgTGlnaHQgSW1hZ2U8L3RleHQ+Cjwvc3ZnPg==",
      date: "2024-03-12",
      userVoted: false
    },
    {
      id: 4,
      title: "Water leakage on sidewalk",
      description: "Continuous water leakage creating slippery conditions and wasting water.",
      category: "Water Supply",
      location: "Oak Avenue, Building 15",
      status: "In Progress",
      upvotes: 6,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDg4NGQ0Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5XYXRlciBMZWFrYWdlPC90ZXh0Pgo8L3N2Zz4=",
      date: "2024-03-13",
      userVoted: false
    },
    {
      id: 5,
      title: "Damaged park bench",
      description: "Wooden bench in children's play area is broken and needs repair for safety.",
      category: "Parks",
      location: "Sunshine Park, Sector 8",
      status: "Reported",
      upvotes: 4,
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMTU5MDNjIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5QYXJrIEJlbmNoPC90ZXh0Pgo8L3N2Zz4=",
      date: "2024-03-11",
      userVoted: true
    }
  ]);

  const [newReport, setNewReport] = useState({
    title: '',
    description: '',
    category: '',
    image: null,
    location: ''
  });

  const [filterCategory, setFilterCategory] = useState('all');
  const fileInputRef = useRef(null);

  const categories = ["Roads", "Waste Management", "Utilities", "Water Supply", "Sewage", "Parks", "Other"];
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'Reported': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Resolved': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Reported': return <Clock className="w-3 h-3" />;
      case 'In Progress': return <AlertCircle className="w-3 h-3" />;
      case 'Resolved': return <CheckCircle className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewReport(prev => ({ ...prev, image: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setNewReport(prev => ({ 
            ...prev, 
            location: `Lat: ${position.coords.latitude.toFixed(4)}, Lng: ${position.coords.longitude.toFixed(4)}`
          }));
        },
        (error) => {
          alert('Location access denied. Please enter location manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmitReport = () => {
    if (!newReport.title || !newReport.category || !newReport.description) {
      alert('Please fill in all required fields');
      return;
    }

    const report = {
      ...newReport,
      id: Date.now(),
      status: 'Reported',
      upvotes: 0,
      date: new Date().toISOString().split('T')[0],
      userVoted: false,
      location: newReport.location || 'Location not provided'
    };

    setReports(prev => [report, ...prev]);
    setNewReport({ title: '', description: '', category: '', image: null, location: '' });
    setActiveTab('reports');
    alert('Report submitted successfully!');
  };

  const handleUpvote = (id) => {
    setReports(prev => 
      prev.map(report => 
        report.id === id 
          ? { 
              ...report, 
              upvotes: report.userVoted ? report.upvotes - 1 : report.upvotes + 1,
              userVoted: !report.userVoted
            }
          : report
      )
    );
  };

  const filteredReports = reports.filter(report => 
    filterCategory === 'all' || report.category === filterCategory
  );

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'report', label: 'Report Issue', icon: Plus },
    { id: 'reports', label: 'View Reports', icon: List },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const HomePage = () => (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center py-8 lg:py-12">
        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 lg:mb-6 flex items-center justify-center">
          <Home className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
        </div>
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2 lg:mb-4">Fix My Locality</h1>
        <p className="text-gray-600 lg:text-lg max-w-2xl mx-auto">Report local issues and make your community better through collaborative problem-solving</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div 
          className="bg-gradient-to-br from-green-500 to-green-600 p-4 lg:p-6 rounded-xl text-white cursor-pointer transform hover:scale-105 transition-transform duration-200 shadow-lg"
          onClick={() => setActiveTab('report')}
        >
          <Plus className="w-8 h-8 lg:w-10 lg:h-10 mb-2 lg:mb-3" />
          <h3 className="font-semibold lg:text-lg">Report Issue</h3>
          <p className="text-sm lg:text-base opacity-90">Create new report</p>
        </div>

        <div 
          className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 lg:p-6 rounded-xl text-white cursor-pointer transform hover:scale-105 transition-transform duration-200 shadow-lg"
          onClick={() => setActiveTab('reports')}
        >
          <List className="w-8 h-8 lg:w-10 lg:h-10 mb-2 lg:mb-3" />
          <h3 className="font-semibold lg:text-lg">View Reports</h3>
          <p className="text-sm lg:text-base opacity-90">Track progress</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 lg:p-6 rounded-xl text-white shadow-lg">
          <Bell className="w-8 h-8 lg:w-10 lg:h-10 mb-2 lg:mb-3" />
          <h3 className="font-semibold lg:text-lg">Notifications</h3>
          <p className="text-sm lg:text-base opacity-90">Stay updated</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 lg:p-6 rounded-xl text-white shadow-lg">
          <MapPin className="w-8 h-8 lg:w-10 lg:h-10 mb-2 lg:mb-3" />
          <h3 className="font-semibold lg:text-lg">Nearby Issues</h3>
          <p className="text-sm lg:text-base opacity-90">Local problems</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-sm border">
          <div className="text-2xl lg:text-3xl font-bold text-blue-600">127</div>
          <div className="text-sm lg:text-base text-gray-600">Total Reports</div>
        </div>
        <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-sm border">
          <div className="text-2xl lg:text-3xl font-bold text-green-600">89</div>
          <div className="text-sm lg:text-base text-gray-600">Resolved</div>
        </div>
        <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-sm border">
          <div className="text-2xl lg:text-3xl font-bold text-yellow-600">24</div>
          <div className="text-sm lg:text-base text-gray-600">In Progress</div>
        </div>
        <div className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-sm border">
          <div className="text-2xl lg:text-3xl font-bold text-purple-600">14</div>
          <div className="text-sm lg:text-base text-gray-600">Pending</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 lg:p-6 border shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-4 lg:mb-6 text-lg lg:text-xl">Recent Community Activity</h3>
        <div className="space-y-3 lg:space-y-4">
          {reports.slice(0, 4).map(report => (
            <div key={report.id} className="flex items-center space-x-3 lg:space-x-4 p-3 lg:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                {report.image && <img src={report.image} alt="" className="w-full h-full object-cover" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm lg:text-base text-gray-800 truncate">{report.title}</p>
                <p className="text-xs lg:text-sm text-gray-500">{report.location}</p>
                <p className="text-xs text-gray-400">{report.date}</p>
              </div>
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="flex items-center space-x-1">
                  <ThumbsUp className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" />
                  <span className="text-xs lg:text-sm text-gray-500">{report.upvotes}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(report.status)}`}>
                  {report.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ReportPage = () => (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-6 lg:space-y-8">
        <div className="text-center lg:text-left">
          <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-2">Report New Issue</h2>
          <p className="text-gray-600">Help improve your community by reporting local problems</p>
        </div>
        
        <div className="bg-white rounded-xl p-4 lg:p-8 border shadow-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Issue Title *</label>
              <input
                type="text"
                className="w-full p-3 lg:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                placeholder="Brief description of the issue"
                value={newReport.title}
                onChange={(e) => setNewReport(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Category *</label>
              <select
                className="w-full p-3 lg:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                value={newReport.category}
                onChange={(e) => setNewReport(prev => ({ ...prev, category: e.target.value }))}
              >
                <option value="">Select category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Description *</label>
              <textarea
                className="w-full p-3 lg:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 lg:h-32 resize-none text-sm lg:text-base"
                placeholder="Detailed description of the issue"
                value={newReport.description}
                onChange={(e) => setNewReport(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Location</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="flex-1 p-3 lg:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base"
                  placeholder="Enter location or use GPS"
                  value={newReport.location}
                  onChange={(e) => setNewReport(prev => ({ ...prev, location: e.target.value }))}
                />
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  className="p-3 lg:p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm lg:text-base font-medium text-gray-700 mb-2">Photo</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 lg:p-8">
                {newReport.image ? (
                  <div className="space-y-4">
                    <img src={newReport.image} alt="Preview" className="w-full h-48 lg:h-64 object-cover rounded-lg" />
                    <button
                      type="button"
                      onClick={() => setNewReport(prev => ({ ...prev, image: null }))}
                      className="w-full py-2 lg:py-3 text-red-600 hover:text-red-700 text-sm lg:text-base"
                    >
                      Remove Image
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Camera className="w-12 h-12 lg:w-16 lg:h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4 text-sm lg:text-base">Add a photo to help describe the issue</p>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm lg:text-base"
                    >
                      <Upload className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                      Choose Photo
                    </button>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            <button
              onClick={handleSubmitReport}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 lg:py-4 px-4 lg:px-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2 font-medium text-sm lg:text-base shadow-lg"
            >
              <Send className="w-5 h-5" />
              <span>Submit Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ReportsPage = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl lg:text-3xl font-bold text-gray-800">Community Reports</h2>
          <p className="text-gray-600 text-sm lg:text-base">Browse and support local issues</p>
        </div>
        <div className="relative">
          <select
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 lg:px-6 lg:py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base min-w-40"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <Filter className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
        {filteredReports.map(report => (
          <div key={report.id} className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            {report.image && (
              <img src={report.image} alt="" className="w-full h-48 lg:h-56 object-cover" />
            )}
            <div className="p-4 lg:p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-gray-800 text-sm lg:text-base pr-2">{report.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs border flex items-center space-x-1 whitespace-nowrap ${getStatusColor(report.status)}`}>
                  {getStatusIcon(report.status)}
                  <span>{report.status}</span>
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm lg:text-base">{report.description}</p>
              
              <div className="space-y-2 mb-4 text-xs lg:text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 lg:w-4 lg:h-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{report.location}</span>
                </div>
                <div className="flex justify-between">
                  <span>{report.category}</span>
                  <span>{report.date}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleUpvote(report.id)}
                  className={`flex items-center space-x-2 px-3 py-2 lg:px-4 lg:py-2 rounded-lg transition-colors text-sm lg:text-base ${
                    report.userVoted 
                      ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ThumbsUp className={`w-4 h-4 ${report.userVoted ? 'fill-current' : ''}`} />
                  <span>{report.upvotes}</span>
                </button>
                
                <div className="text-xs lg:text-sm text-gray-500">
                  ID: #{report.id}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <div className="text-center py-12 lg:py-16">
          <div className="text-gray-400 mb-4">
            <List className="w-16 h-16 lg:w-20 lg:h-20 mx-auto" />
          </div>
          <h3 className="text-lg lg:text-xl font-medium text-gray-600 mb-2">No reports found</h3>
          <p className="text-gray-500 text-sm lg:text-base">Try adjusting your filter or be the first to report an issue.</p>
        </div>
      )}
    </div>
  );

  const ProfilePage = () => (
    <div className="max-w-2xl mx-auto space-y-6 lg:space-y-8">
      <div className="text-center">
        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 lg:mb-6 flex items-center justify-center">
          <User className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
        </div>
        <h2 className="text-xl lg:text-3xl font-bold text-gray-800">John Citizen</h2>
        <p className="text-gray-600 lg:text-lg">Bengaluru, Karnataka</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="text-center p-4 lg:p-6 bg-blue-50 rounded-xl">
          <div className="text-2xl lg:text-3xl font-bold text-blue-600">12</div>
          <div className="text-sm lg:text-base text-gray-600">Reports Made</div>
        </div>
        <div className="text-center p-4 lg:p-6 bg-green-50 rounded-xl">
          <div className="text-2xl lg:text-3xl font-bold text-green-600">8</div>
          <div className="text-sm lg:text-base text-gray-600">Issues Resolved</div>
        </div>
        <div className="text-center p-4 lg:p-6 bg-purple-50 rounded-xl lg:col-span-1 col-span-2">
          <div className="text-2xl lg:text-3xl font-bold text-purple-600">45</div>
          <div className="text-sm lg:text-base text-gray-600">Upvotes Given</div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-4 lg:p-6 rounded-xl border shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-4 text-lg lg:text-xl">Notification Preferences</h3>
          <div className="space-y-4">
            <label className="flex items-center">
              <input type="checkbox" className="rounded w-4 h-4 lg:w-5 lg:h-5" defaultChecked />
              <span className="ml-3 text-gray-700 text-sm lg:text-base">Report status updates</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded w-4 h-4 lg:w-5 lg:h-5" defaultChecked />
              <span className="ml-3 text-gray-700 text-sm lg:text-base">Nearby issue alerts</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded w-4 h-4 lg:w-5 lg:h-5" />
              <span className="ml-3 text-gray-700 text-sm lg:text-base">Weekly community digest</span>
            </label>
          </div>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-xl border shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-4 text-lg lg:text-xl">My Recent Reports</h3>
          <div className="space-y-3">
            {reports.slice(0, 3).map(report => (
              <div key={report.id} className="flex items-center justify-between p-3 lg:p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                    {report.image && <img src={report.image} alt="" className="w-full h-full object-cover" />}
                  </div>
                  <div>
                    <p className="font-medium text-sm lg:text-base text-gray-800">{report.title}</p>
                    <p className="text-xs lg:text-sm text-gray-500">{report.date}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(report.status)}`}>
                  {report.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const DesktopSidebar = () => (
    <div className="hidden lg:block w-64 bg-white border-r border-gray-200 min-h-screen fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Fix My Locality</h1>
          </div>
        </div>
        
        <nav className="space-y-2">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id 
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );

  const MobileHeader = () => (
    <div className="lg:hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <h1 className="text-lg font-semibold">
            {activeTab === 'home' && 'Fix My Locality'}
            {activeTab === 'report' && 'Report Issue'}
            {activeTab === 'reports' && 'Community Reports'}
            {activeTab === 'profile' && 'Profile'}
          </h1>
        </div>
        <Bell className="w-6 h-6" />
      </div>
      
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <nav className="py-2">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-colors ${
                    activeTab === item.id 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );

  const DesktopHeader = () => (
    <div className="hidden lg:block bg-white border-b border-gray-200 pl-64">
      <div className="flex items-center justify-between p-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {activeTab === 'home' && 'Dashboard'}
            {activeTab === 'report' && 'Report New Issue'}
            {activeTab === 'reports' && 'Community Reports'}
            {activeTab === 'profile' && 'User Profile'}
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );

  const BottomNavigation = () => (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="grid grid-cols-4">
        {navItems.map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-3 ${
                activeTab === item.id ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs mt-1">{item.id === 'report' ? 'Report' : item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <DesktopSidebar />
      <DesktopHeader />
      <MobileHeader />
      
      <div className="lg:pl-64 lg:pt-0 pt-0">
        <div className="p-4 lg:p-8 pb-20 lg:pb-8">
          {activeTab === 'home' && <HomePage />}
          {activeTab === 'report' && <ReportPage />}
          {activeTab === 'reports' && <ReportsPage />}
          {activeTab === 'profile' && <ProfilePage />}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default App;