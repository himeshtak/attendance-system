import React, { useState, useEffect } from 'react';
import { Users,TrendingUp, Filter, Download, UserCheck, UserX, BookOpen, CheckSquare, XSquare, Layout } from 'lucide-react';


class AttendanceAPI {
  constructor() {
    this.sections = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    this.students = this.generateStudents();
    this.subjects = [
      { id: 1, name: 'Automata', code: 'CS401' },
      { id: 2, name: 'Web Technology', code: 'CS402' },
      { id: 3, name: 'Machine Learning', code: 'CS403' },
      { id: 4, name: 'Recommender System', code: 'CS404' }
    ];
    this.attendance = this.generateMockAttendance();
  }

  generateStudents() {
    const firstNames = [
      'Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Arnav', 'Ayaan', 'Krishna', 'Ishaan',
      'Diya', 'Aadhya', 'Ananya', 'Pari', 'Navya', 'Angel', 'Ira', 'Pihu', 'Riya', 'Anvi',
      'Rohan', 'Karan', 'Shiv', 'Reyansh', 'Atharv', 'Kabir', 'Rudra', 'Shivansh', 'Pranav', 'Aarush',
      'Saanvi', 'Anika', 'Avni', 'Myra', 'Sara', 'Kiara', 'Aaradhya', 'Mira', 'Zara', 'Aditi',
      'Aayan', 'Dev', 'Dhruv', 'Vedant', 'Yash', 'Darsh', 'Laksh', 'Veer', 'Aaryan', 'Hrithik',
      'Aanya', 'Shanaya', 'Ishita', 'Tanvi', 'Neha', 'Priya', 'Nisha', 'Meera', 'Pooja', 'Kavya',
      'Rahul', 'Amit', 'Vikram', 'Raj', 'Sanjay', 'Kunal', 'Nikhil', 'Varun', 'Mohit', 'Sahil',
      'Priyanka', 'Deepika', 'Shruti', 'Sneha', 'Anjali', 'Nikita', 'Swati', 'Preeti', 'Divya', 'Radhika',
      'Aryan', 'Harsh', 'Rishabh', 'Shubham', 'Abhishek', 'Gaurav', 'Vishal', 'Akash', 'Manish', 'Piyush',
      'Simran', 'Kritika', 'Pallavi', 'Shikha', 'Megha', 'Sonia', 'Ritu', 'Jyoti', 'Rachna', 'Sapna',
      'Siddharth', 'Ashish', 'Deepak', 'Manoj', 'Sandeep', 'Anil', 'Suresh', 'Ramesh', 'Rajesh', 'Dinesh',
      'Madhuri', 'Rekha', 'Sushma', 'Vandana', 'Kavita', 'Sunita', 'Anita', 'Geeta', 'Seema', 'Alka',
      'Karthik', 'Aakash', 'Tarun', 'Nitin', 'Ajay', 'Vijay', 'Sunil', 'Ravi', 'Rakesh', 'Mukesh',
      'Pooja', 'Rani', 'Sita', 'Gita', 'Rita', 'Lata', 'Mala', 'Kamla', 'Radha', 'Shanti',
      'Prakash', 'Santosh', 'Subhash', 'Mahesh', 'Yogesh', 'Naresh', 'Kamlesh', 'Umesh', 'Lokesh', 'Hitesh',
      'Usha', 'Asha', 'Nisha', 'Disha', 'Trisha', 'Manisha', 'Tanisha', 'Varsha', 'Harsha', 'Diksha',
      'Amar', 'Akbar', 'Anthony', 'Anand', 'Ashok', 'Bala', 'Chetan', 'Dilip', 'Gopal', 'Hari',
      'Indira', 'Jaya', 'Kiran', 'Laxmi', 'Maya', 'Naina', 'Parul', 'Renu', 'Smita', 'Tara',
      'Naveen', 'Pavan', 'Sachin', 'Salman', 'Shahrukh', 'Sunny', 'Tushar', 'Umang', 'Vikas', 'Yuvraj',
      'Alia', 'Deepti', 'Ekta', 'Gauri', 'Hema', 'Isha', 'Jhanvi', 'Komal', 'Leena', 'Monika'
    ];
    
    const lastNames = [
      'Sharma', 'Verma', 'Patel', 'Kumar', 'Singh', 'Gupta', 'Reddy', 'Mehta', 'Joshi', 'Desai',
      'Nair', 'Iyer', 'Menon', 'Pillai', 'Rao', 'Chatterjee', 'Banerjee', 'Das', 'Roy', 'Sen',
      'Kapoor', 'Malhotra', 'Khanna', 'Chopra', 'Bhatia', 'Agarwal', 'Jain', 'Arora', 'Sethi', 'Sinha',
      'Pandey', 'Mishra', 'Tiwari', 'Dubey', 'Chaturvedi', 'Trivedi', 'Saxena', 'Shukla', 'Dwivedi', 'Pathak',
      'Khan', 'Ahmed', 'Ali', 'Malik', 'Sheikh', 'Ansari', 'Qureshi', 'Siddiqui', 'Rizvi', 'Hussain'
    ];
    
    const students = [];
    let globalId = 1;
    
    this.sections.forEach(section => {
      const studentsInSection = 40 + Math.floor(Math.random() * 11);
      
      for (let i = 1; i <= studentsInSection; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const rollNo = `CS2024${section}${String(i).padStart(3, '0')}`;
        
        students.push({
          id: globalId++,
          rollNo: rollNo,
          name: `${firstName} ${lastName}`,
          email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@student.edu`,
          section: section
        });
      }
    });
    
    return students;
  }

  generateMockAttendance() {
    const records = [];
    const today = new Date();
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      this.subjects.forEach(subject => {
        if (Math.random() > 0.8) return;
        
        this.students.forEach(student => {
          const random = Math.random();
          const status = random > 0.15 ? 'present' : random > 0.05 ? 'absent' : 'late';
          
          records.push({
            id: `${student.id}-${subject.id}-${dateStr}`,
            studentId: student.id,
            subjectId: subject.id,
            date: dateStr,
            status: status,
            markedAt: status !== 'absent' ? `${9 + Math.floor(Math.random() * 3)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} AM` : null
          });
        });
      });
    }
    
    return records;
  }

  getSections() {
    return Promise.resolve(this.sections);
  }

  getStudents(section) {
    const filtered = section ? this.students.filter(s => s.section === section) : this.students;
    return Promise.resolve(filtered);
  }

  getSubjects() {
    return Promise.resolve(this.subjects);
  }

  getAttendance(filters = {}) {
    let filtered = [...this.attendance];
    
    if (filters.date) {
      filtered = filtered.filter(r => r.date === filters.date);
    }
    if (filters.subjectId) {
      filtered = filtered.filter(r => r.subjectId === parseInt(filters.subjectId));
    }
    if (filters.section) {
      const sectionStudents = this.students.filter(s => s.section === filters.section).map(s => s.id);
      filtered = filtered.filter(r => sectionStudents.includes(r.studentId));
    }
    
    return Promise.resolve(filtered);
  }

  markAttendance(studentId, subjectId, status) {
    const today = new Date().toISOString().split('T')[0];
    const existing = this.attendance.find(r => 
      r.studentId === studentId && 
      r.subjectId === subjectId && 
      r.date === today
    );
    
    if (existing) {
      existing.status = status;
      existing.markedAt = new Date().toLocaleTimeString();
    } else {
      this.attendance.push({
        id: `${studentId}-${subjectId}-${today}`,
        studentId,
        subjectId,
        date: today,
        status,
        markedAt: new Date().toLocaleTimeString()
      });
    }
    
    return Promise.resolve({ success: true });
  }

  markAllAttendance(section, subjectId, status) {
    const today = new Date().toISOString().split('T')[0];
    const sectionStudents = this.students.filter(s => s.section === section);
    
    sectionStudents.forEach(student => {
      const existing = this.attendance.find(r => 
        r.studentId === student.id && 
        r.subjectId === subjectId && 
        r.date === today
      );
      
      if (existing) {
        existing.status = status;
        existing.markedAt = new Date().toLocaleTimeString();
      } else {
        this.attendance.push({
          id: `${student.id}-${subjectId}-${today}`,
          studentId: student.id,
          subjectId,
          date: today,
          status,
          markedAt: new Date().toLocaleTimeString()
        });
      }
    });
    
    return Promise.resolve({ success: true });
  }

  getStatistics(section, subjectId) {
    const today = new Date().toISOString().split('T')[0];
    const sectionStudents = this.students.filter(s => s.section === section).map(s => s.id);
    
    const todayRecords = this.attendance.filter(r => 
      r.date === today && 
      sectionStudents.includes(r.studentId) &&
      (!subjectId || r.subjectId === parseInt(subjectId))
    );
    
    const present = todayRecords.filter(r => r.status === 'present').length;
    const absent = todayRecords.filter(r => r.status === 'absent').length;
    const late = todayRecords.filter(r => r.status === 'late').length;
    
    const last30Days = this.attendance.filter(r => {
      const recordDate = new Date(r.date);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return recordDate >= thirtyDaysAgo && 
             sectionStudents.includes(r.studentId) &&
             (!subjectId || r.subjectId === parseInt(subjectId));
    });
    
    const avgAttendance = last30Days.length > 0 
      ? (last30Days.filter(r => r.status === 'present' || r.status === 'late').length / last30Days.length * 100).toFixed(1)
      : 0;
    
    return Promise.resolve({
      today: { present, absent, late, total: sectionStudents.length },
      avgAttendance: parseFloat(avgAttendance)
    });
  }
}

const api = new AttendanceAPI();

export default function AttendanceDashboard() {
  const [sections, setSections] = useState([]);
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [statistics, setStatistics] = useState(null);
  const [selectedSection, setSelectedSection] = useState('A');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    if (subjects.length > 0 && selectedSection) {
      loadData();
    }
  }, [selectedDate, selectedSubject, selectedSection]);

  const loadInitialData = async () => {
    const [sects, subs] = await Promise.all([
      api.getSections(),
      api.getSubjects()
    ]);
    
    setSections(sects);
    setSubjects(subs);
    if (subs.length > 0) {
      setSelectedSubject(subs[0].id.toString());
    }
  };

  const loadData = async () => {
    if (!selectedSubject || !selectedSection) return;
    
    setLoading(true);
    const [studs, attn, stats] = await Promise.all([
      api.getStudents(selectedSection),
      api.getAttendance({ date: selectedDate, subjectId: selectedSubject, section: selectedSection }),
      api.getStatistics(selectedSection, selectedSubject)
    ]);
    
    setStudents(studs);
    setAttendance(attn);
    setStatistics(stats);
    setLoading(false);
  };

  const handleMarkAttendance = async (studentId, status) => {
    if (!selectedSubject) return;
    await api.markAttendance(studentId, parseInt(selectedSubject), status);
    loadData();
  };

  const handleMarkAllPresent = async () => {
    if (!selectedSubject || !selectedSection) return;
    await api.markAllAttendance(selectedSection, parseInt(selectedSubject), 'present');
    loadData();
  };

  const handleMarkAllAbsent = async () => {
    if (!selectedSubject || !selectedSection) return;
    await api.markAllAttendance(selectedSection, parseInt(selectedSubject), 'absent');
    loadData();
  };

  const getStudentAttendance = (studentId) => {
    return attendance.find(a => a.studentId === studentId);
  };

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToCSV = () => {
    const subject = subjects.find(s => s.id === parseInt(selectedSubject));
    const headers = ['Roll No', 'Name', 'Email', 'Section', 'Status', 'Marked At'];
    const rows = filteredStudents.map(student => {
      const attn = getStudentAttendance(student.id);
      return [
        student.rollNo,
        student.name,
        student.email,
        student.section,
        attn?.status || 'Not Marked',
        attn?.markedAt || 'N/A'
      ];
    });
    
    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `attendance_${subject?.name}_Section${selectedSection}_${selectedDate}.csv`;
    a.click();
  };

  if (loading && subjects.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const selectedSubjectData = subjects.find(s => s.id === parseInt(selectedSubject));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Student Attendance System</h1>
                <p className="text-gray-600 mt-1">Computer Science Department - All Sections</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={exportToCSV}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {statistics && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Students</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{statistics.today.total}</p>
                  <p className="text-xs text-gray-500 mt-1">Section {selectedSection}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Present Today</p>
                  <p className="text-3xl font-bold text-green-600 mt-2">{statistics.today.present}</p>
                  <p className="text-xs text-gray-500 mt-1">{statistics.today.total > 0 ? Math.round((statistics.today.present / statistics.today.total) * 100) : 0}% of class</p>
                </div>
                <div className="bg-green-100 p-3 rounded-xl">
                  <UserCheck className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Absent Today</p>
                  <p className="text-3xl font-bold text-red-600 mt-2">{statistics.today.absent}</p>
                  <p className="text-xs text-gray-500 mt-1">{statistics.today.total > 0 ? Math.round((statistics.today.absent / statistics.today.total) * 100) : 0}% of class</p>
                </div>
                <div className="bg-red-100 p-3 rounded-xl">
                  <UserX className="w-8 h-8 text-red-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Avg Attendance</p>
                  <p className="text-3xl font-bold text-purple-600 mt-2">{statistics.avgAttendance}%</p>
                  <p className="text-xs text-gray-500 mt-1">Last 30 days</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <Layout className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Select Section</h2>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {sections.map(section => (
              <button
                key={section}
                onClick={() => setSelectedSection(section)}
                className={`py-3 px-4 rounded-lg font-semibold text-lg transition-all ${
                  selectedSection === section
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Section {section}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Attendance Controls</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {subjects.map(subject => (
                  <option key={subject.id} value={subject.id}>
                    {subject.name} ({subject.code})
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Student</label>
              <input
                type="text"
                placeholder="Search by name or roll no..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          {selectedDate === new Date().toISOString().split('T')[0] && (
            <div className="flex space-x-3 pt-4 border-t border-gray-200">
              <button
                onClick={handleMarkAllPresent}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all shadow-md font-medium"
              >
                <CheckSquare className="w-5 h-5" />
                <span>Mark All Present</span>
              </button>
              <button
                onClick={handleMarkAllAbsent}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-md font-medium"
              >
                <XSquare className="w-5 h-5" />
                <span>Mark All Absent</span>
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedSubjectData?.name} - Section {selectedSection}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {filteredStudents.length} students • {selectedDate}
                </p>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Roll No</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Student Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Marked At</th>
                  {selectedDate === new Date().toISOString().split('T')[0] && (
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.map(student => {
                  const attn = getStudentAttendance(student.id);
                  return (
                    <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm font-medium text-gray-900">{student.rollNo}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{student.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{student.email}</span>
                      </td>
                      <td className="px-6 py-4">
                        {attn ? (
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            attn.status === 'present' ? 'bg-green-100 text-green-800' :
                            attn.status === 'absent' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {attn.status.charAt(0).toUpperCase() + attn.status.slice(1)}
                          </span>
                        ) : (
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                            Not Marked
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{attn?.markedAt || '-'}</td>
                      {selectedDate === new Date().toISOString().split('T')[0] && (
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleMarkAttendance(student.id, 'present')}
                              className="px-3 py-1 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700 transition-colors font-medium"
                            >
                              Present
                            </button>
                            <button
                              onClick={() => handleMarkAttendance(student.id, 'absent')}
                              className="px-3 py-1 bg-red-600 text-white text-xs rounded-lg hover:bg-red-700 transition-colors font-medium"
                            >
                              Absent
                            </button>
                            <button
                              onClick={() => handleMarkAttendance(student.id, 'late')}
                              className="px-3 py-1 bg-yellow-600 text-white text-xs rounded-lg hover:bg-yellow-700 transition-colors font-medium"
                            >
                              Late
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
