import React from "react";

export default function Layout({ children } : {children :React.ReactNode}) {
	return (
		<div style={{backgroundColor: 'thistle'}}>
			{children}
		</div>
	);
}