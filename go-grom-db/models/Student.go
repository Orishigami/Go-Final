// models/Student.go
package models

import (
	"time"

	"gorm.io/gorm"
)

type Student struct {
	gorm.Model        //grom จะสร้าง ID, CreatedAt, Description....
	StudentId  string `gorm:"size:9"`
	FirstName  string
	LastName   string
	Sex        string `gorm:"size:10"`
	Bod        time.Time `gorm:"type:date"` // กำหนดชนิดข้อมูลเป็น date
	Profile    string
}
