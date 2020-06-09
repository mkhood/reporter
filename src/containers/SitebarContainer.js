// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { fetchResultsList } from '../redux';
// import SidebarItem from '../components/Sidebar/SidebarItem';

// function SitebarContainer ({ albumsData, fetchResultsList }) {
//     useEffect(() => {
//       fetchResultsList()
//     }, [])
//     return albumsData.loading ? (
//       <h2>Loading</h2>
//     ) : (
//       <div>
//           {/* {albumsData.albums.map(album => (
//             <SidebarItem album={album} key={album.id}/>
//           ))} */}
//       </div>
//     )
//   }

//   const mapStateToProps = state => {
//     return {
//       albumsData: state.album
//     }
//   }

//   const mapDispatchToProps = dispatch => {
//     return {
//       fetchResultsList: () => dispatch(fetchResultsList())
//     }
//   }
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(SitebarContainer)