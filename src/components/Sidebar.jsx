import React from 'react'
import { Navigate, Link } from 'react-router-dom'
import { Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon, IconButton } from '@mui/material'
import { Dashboard, Payment, Diversity3, Groups, Store, FileCopy, Badge, Category, Inventory, ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
export default function Sidebar() {
    const lists = [
        {
            icons: <Dashboard />,
            name: "Dashboard",
            link: "",
        },
        {
            icons: <Diversity3 />,
            name: "Employees",
            link: "employees",
        },
        {
            icons: <Payment />,
            name: "Salaries",
            link: "salaries",
        },
        {
            icons: <Groups />,
            name: "Vendors",
            link: "vendors",
        },
        {
            icons: <Store />,
            name: "purchase Order",
            link: "purchaseOrders",
        },
        {
            icons: <FileCopy />,
            name: "Invoice",
            link: "invoice",
        },
        {
            icons: <Badge />,
            name: "Job Card",
            link: "jobcard",
        },
        {
            icons: <Category />,
            name: "Products",
            link: "products",
        },
        {
            icons: <Inventory />,
            name: "Packages",
            link: "packages",
        },

    ]

    const [isOpen, setIsOpen] = React.useState(true);
    const [text, setText ] = React.useState("block");
    const [sidebarWidth, setSidebarWidth ] = React.useState("15%");
    const handleSidebar = ()=>{
        if(isOpen){
            setText("none")
            setSidebarWidth("4%") 
            setIsOpen(false)     
        }else{
            setText("block")
            setSidebarWidth("15%")
            setIsOpen(true) 
        }
    }

    return (
        <Typography variant="div" sx={{
            borderRight: '1px solid lightgrey',
            width: sidebarWidth,
            height: '90vh',
            position: 'relative',
            transition:'all ease-in-out 0.2s'
        }}>
            <IconButton onClick={handleSidebar} sx={{zIndex:'999',position:'absolute',right:'-20px', top:'2px',backgroundColor:'#f4f4f4',"&:hover":{backgroundColor:'#f4f4f4'}}}>
             {isOpen? <ArrowCircleLeftOutlined /> : <ArrowCircleRightOutlined />}
            </IconButton>

            <Typography variant="div" sx={{
                position: 'fixed',
                width: sidebarWidth,
                height: '90vh',
                paddingTop: '30px',
                transition:'all ease-in-out 0.2s'
            }}>

                <List>
                    {lists.map(item => (
                        <Link style={{ textDecoration: 'none', color: grey[800] }} key={item.name} to={item.link}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{padding:'5px 0'}}>
                                        {item.icons}
                                    </ListItemIcon>
                                    <ListItemText sx={{display:text}}>
                                        {item.name}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>

            </Typography>

        </Typography>
    )
}
